## github settings中的 Developer settings
- https://github.com/settings/tokens


## ghcr.io 服务器无法访问
可以将镜像上传到docker.com即可

## Error response from daemon: Head "https://ghcr.io/v2/***/fastgpt0628/manifests/latest": unauthorized
设置packages private为public
- https://github.com/users/aehyok/packages/container/fastgpt0628/settings

## 缓存设置
- https://docs.github.com/zh/actions/using-workflows/caching-dependencies-to-speed-up-workflows

## next.js 也可以编译为静态文件
```
https://nextjs.org/docs/app/building-your-application/deploying/static-exports#deploying
```

## 生成镜像 ghcr.io同步到docker.com
```
name: Build images and copy image to docker
on:
  workflow_dispatch:
  push:
    branches:
      - 'main'
    tags:
      - 'v*.*.*'
jobs:
  build-images:
    runs-on: ubuntu-20.04
    steps:
      - name: Checkout
        uses: actions/checkout@v3
        with:
          fetch-depth: 1
      - name: Install Dependencies
        run: |
          sudo apt update && sudo apt install -y nodejs npm
      - name: Set up QEMU (optional)
        uses: docker/setup-qemu-action@v2
      - name: Set up Docker Buildx
        uses: docker/setup-buildx-action@v2
        with:
          driver-opts: network=host
      - name: Login to GitHub Container Registry
        uses: docker/login-action@v2
        with:
          registry: ghcr.io
          username: ${{ github.repository_owner }}
          password: ${{ secrets.GH_PAT }}
      - name: Set DOCKER_REPO_TAGGED based on branch or tag
        run: |
          if [[ "${{ github.ref_name }}" == "main" ]]; then
            echo "DOCKER_REPO_TAGGED=ghcr.io/${{ github.repository_owner }}/fastgpt0628:latest" >> $GITHUB_ENV
          else
            echo "DOCKER_REPO_TAGGED=ghcr.io/${{ github.repository_owner }}/fastgpt0628:${{ github.ref_name }}" >> $GITHUB_ENV
          fi

      - name: Build and publish image for main branch or tag push event
        env:
          DOCKER_REPO_TAGGED: ${{ env.DOCKER_REPO_TAGGED }}
        run: |
          docker buildx build \
          --platform linux/amd64,linux/arm64 \
          --label "org.opencontainers.image.source=  https://github.com/  ${{ github.repository_owner }}/fastgpt0628" \
          --label "org.opencontainers.image.description=fastgpt0628 image" \
          --label "org.opencontainers.image.licenses=MIT" \
          --push \
          -t ${DOCKER_REPO_TAGGED} \
          -f Dockerfile \
          .
  push-to-docker-hub:
    needs: build-images
    runs-on: ubuntu-20.04
    steps:
      - name: Checkout code
        uses: actions/checkout@v3
      - name: Login to Docker Hub
        uses: docker/login-action@v2
        with:
          username: ${{ secrets.DOCKER_HUB_NAME }}
          password: ${{ secrets.DOCKER_HUB_PASSWORD }}
      - name: Set DOCKER_REPO_TAGGED based on branch or tag
        run: |
          if [[ "${{ github.ref_name }}" == "main" ]]; then
            echo "IMAGE_TAG=latest" >> $GITHUB_ENV
          else
            echo "IMAGE_TAG=${{ github.ref_name }}" >> $GITHUB_ENV
          fi
      - name: Pull image from GitHub Container Registry
        run: docker pull ghcr.io/${{ github.repository_owner }}/fastgpt0628:${{env.IMAGE_TAG}}
      - name: Tag image with Docker Hub repository name and version tag
        run: docker tag ghcr.io/${{ github.repository_owner }}/fastgpt0628:${{env.IMAGE_TAG}} ${{ secrets.DOCKER_IMAGE_NAME }}:${{env.IMAGE_TAG}}
      - name: Push image to Docker Hub
        run: docker push ${{ secrets.DOCKER_IMAGE_NAME }}:${{env.IMAGE_TAG}}

```

