import{_ as s,o as n,c as a,O as e}from"./chunks/framework.ce94e18e.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"javascript/2023-07-01-github  token.md","lastUpdated":1690019485000}'),l={name:"javascript/2023-07-01-github  token.md"},o=e(`<h2 id="github-settings中的-developer-settings" tabindex="-1">github settings中的 Developer settings <a class="header-anchor" href="#github-settings中的-developer-settings" aria-label="Permalink to &quot;github settings中的 Developer settings&quot;">​</a></h2><ul><li><a href="https://github.com/settings/tokens" target="_blank" rel="noreferrer">https://github.com/settings/tokens</a></li></ul><h2 id="ghcr-io-服务器无法访问" tabindex="-1">ghcr.io 服务器无法访问 <a class="header-anchor" href="#ghcr-io-服务器无法访问" aria-label="Permalink to &quot;ghcr.io 服务器无法访问&quot;">​</a></h2><p>可以将镜像上传到docker.com即可</p><h2 id="error-response-from-daemon-head-https-ghcr-io-v2-fastgpt0628-manifests-latest-unauthorized" tabindex="-1">Error response from daemon: Head &quot;<a href="https://ghcr.io/v2/***/fastgpt0628/manifests/latest" target="_blank" rel="noreferrer">https://ghcr.io/v2/***/fastgpt0628/manifests/latest</a>&quot;: unauthorized <a class="header-anchor" href="#error-response-from-daemon-head-https-ghcr-io-v2-fastgpt0628-manifests-latest-unauthorized" aria-label="Permalink to &quot;Error response from daemon: Head &quot;https://ghcr.io/v2/***/fastgpt0628/manifests/latest&quot;: unauthorized&quot;">​</a></h2><p>设置packages private为public</p><ul><li><a href="https://github.com/users/aehyok/packages/container/fastgpt0628/settings" target="_blank" rel="noreferrer">https://github.com/users/aehyok/packages/container/fastgpt0628/settings</a></li></ul><h2 id="缓存设置" tabindex="-1">缓存设置 <a class="header-anchor" href="#缓存设置" aria-label="Permalink to &quot;缓存设置&quot;">​</a></h2><ul><li><a href="https://docs.github.com/zh/actions/using-workflows/caching-dependencies-to-speed-up-workflows" target="_blank" rel="noreferrer">https://docs.github.com/zh/actions/using-workflows/caching-dependencies-to-speed-up-workflows</a></li></ul><h2 id="next-js-也可以编译为静态文件" tabindex="-1">next.js 也可以编译为静态文件 <a class="header-anchor" href="#next-js-也可以编译为静态文件" aria-label="Permalink to &quot;next.js 也可以编译为静态文件&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">https://nextjs.org/docs/app/building-your-application/deploying/static-exports#deploying</span></span></code></pre></div><h2 id="生成镜像-ghcr-io同步到docker-com" tabindex="-1">生成镜像 ghcr.io同步到docker.com <a class="header-anchor" href="#生成镜像-ghcr-io同步到docker-com" aria-label="Permalink to &quot;生成镜像 ghcr.io同步到docker.com&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">name: Build images and copy image to docker</span></span>
<span class="line"><span style="color:#A6ACCD;">on:</span></span>
<span class="line"><span style="color:#A6ACCD;">  workflow_dispatch:</span></span>
<span class="line"><span style="color:#A6ACCD;">  push:</span></span>
<span class="line"><span style="color:#A6ACCD;">    branches:</span></span>
<span class="line"><span style="color:#A6ACCD;">      - &#39;main&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    tags:</span></span>
<span class="line"><span style="color:#A6ACCD;">      - &#39;v*.*.*&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">jobs:</span></span>
<span class="line"><span style="color:#A6ACCD;">  build-images:</span></span>
<span class="line"><span style="color:#A6ACCD;">    runs-on: ubuntu-20.04</span></span>
<span class="line"><span style="color:#A6ACCD;">    steps:</span></span>
<span class="line"><span style="color:#A6ACCD;">      - name: Checkout</span></span>
<span class="line"><span style="color:#A6ACCD;">        uses: actions/checkout@v3</span></span>
<span class="line"><span style="color:#A6ACCD;">        with:</span></span>
<span class="line"><span style="color:#A6ACCD;">          fetch-depth: 1</span></span>
<span class="line"><span style="color:#A6ACCD;">      - name: Install Dependencies</span></span>
<span class="line"><span style="color:#A6ACCD;">        run: |</span></span>
<span class="line"><span style="color:#A6ACCD;">          sudo apt update &amp;&amp; sudo apt install -y nodejs npm</span></span>
<span class="line"><span style="color:#A6ACCD;">      - name: Set up QEMU (optional)</span></span>
<span class="line"><span style="color:#A6ACCD;">        uses: docker/setup-qemu-action@v2</span></span>
<span class="line"><span style="color:#A6ACCD;">      - name: Set up Docker Buildx</span></span>
<span class="line"><span style="color:#A6ACCD;">        uses: docker/setup-buildx-action@v2</span></span>
<span class="line"><span style="color:#A6ACCD;">        with:</span></span>
<span class="line"><span style="color:#A6ACCD;">          driver-opts: network=host</span></span>
<span class="line"><span style="color:#A6ACCD;">      - name: Login to GitHub Container Registry</span></span>
<span class="line"><span style="color:#A6ACCD;">        uses: docker/login-action@v2</span></span>
<span class="line"><span style="color:#A6ACCD;">        with:</span></span>
<span class="line"><span style="color:#A6ACCD;">          registry: ghcr.io</span></span>
<span class="line"><span style="color:#A6ACCD;">          username: \${{ github.repository_owner }}</span></span>
<span class="line"><span style="color:#A6ACCD;">          password: \${{ secrets.GH_PAT }}</span></span>
<span class="line"><span style="color:#A6ACCD;">      - name: Set DOCKER_REPO_TAGGED based on branch or tag</span></span>
<span class="line"><span style="color:#A6ACCD;">        run: |</span></span>
<span class="line"><span style="color:#A6ACCD;">          if [[ &quot;\${{ github.ref_name }}&quot; == &quot;main&quot; ]]; then</span></span>
<span class="line"><span style="color:#A6ACCD;">            echo &quot;DOCKER_REPO_TAGGED=ghcr.io/\${{ github.repository_owner }}/fastgpt0628:latest&quot; &gt;&gt; $GITHUB_ENV</span></span>
<span class="line"><span style="color:#A6ACCD;">          else</span></span>
<span class="line"><span style="color:#A6ACCD;">            echo &quot;DOCKER_REPO_TAGGED=ghcr.io/\${{ github.repository_owner }}/fastgpt0628:\${{ github.ref_name }}&quot; &gt;&gt; $GITHUB_ENV</span></span>
<span class="line"><span style="color:#A6ACCD;">          fi</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      - name: Build and publish image for main branch or tag push event</span></span>
<span class="line"><span style="color:#A6ACCD;">        env:</span></span>
<span class="line"><span style="color:#A6ACCD;">          DOCKER_REPO_TAGGED: \${{ env.DOCKER_REPO_TAGGED }}</span></span>
<span class="line"><span style="color:#A6ACCD;">        run: |</span></span>
<span class="line"><span style="color:#A6ACCD;">          docker buildx build \\</span></span>
<span class="line"><span style="color:#A6ACCD;">          --platform linux/amd64,linux/arm64 \\</span></span>
<span class="line"><span style="color:#A6ACCD;">          --label &quot;org.opencontainers.image.source=  https://github.com/  \${{ github.repository_owner }}/fastgpt0628&quot; \\</span></span>
<span class="line"><span style="color:#A6ACCD;">          --label &quot;org.opencontainers.image.description=fastgpt0628 image&quot; \\</span></span>
<span class="line"><span style="color:#A6ACCD;">          --label &quot;org.opencontainers.image.licenses=MIT&quot; \\</span></span>
<span class="line"><span style="color:#A6ACCD;">          --push \\</span></span>
<span class="line"><span style="color:#A6ACCD;">          -t \${DOCKER_REPO_TAGGED} \\</span></span>
<span class="line"><span style="color:#A6ACCD;">          -f Dockerfile \\</span></span>
<span class="line"><span style="color:#A6ACCD;">          .</span></span>
<span class="line"><span style="color:#A6ACCD;">  push-to-docker-hub:</span></span>
<span class="line"><span style="color:#A6ACCD;">    needs: build-images</span></span>
<span class="line"><span style="color:#A6ACCD;">    runs-on: ubuntu-20.04</span></span>
<span class="line"><span style="color:#A6ACCD;">    steps:</span></span>
<span class="line"><span style="color:#A6ACCD;">      - name: Checkout code</span></span>
<span class="line"><span style="color:#A6ACCD;">        uses: actions/checkout@v3</span></span>
<span class="line"><span style="color:#A6ACCD;">      - name: Login to Docker Hub</span></span>
<span class="line"><span style="color:#A6ACCD;">        uses: docker/login-action@v2</span></span>
<span class="line"><span style="color:#A6ACCD;">        with:</span></span>
<span class="line"><span style="color:#A6ACCD;">          username: \${{ secrets.DOCKER_HUB_NAME }}</span></span>
<span class="line"><span style="color:#A6ACCD;">          password: \${{ secrets.DOCKER_HUB_PASSWORD }}</span></span>
<span class="line"><span style="color:#A6ACCD;">      - name: Set DOCKER_REPO_TAGGED based on branch or tag</span></span>
<span class="line"><span style="color:#A6ACCD;">        run: |</span></span>
<span class="line"><span style="color:#A6ACCD;">          if [[ &quot;\${{ github.ref_name }}&quot; == &quot;main&quot; ]]; then</span></span>
<span class="line"><span style="color:#A6ACCD;">            echo &quot;IMAGE_TAG=latest&quot; &gt;&gt; $GITHUB_ENV</span></span>
<span class="line"><span style="color:#A6ACCD;">          else</span></span>
<span class="line"><span style="color:#A6ACCD;">            echo &quot;IMAGE_TAG=\${{ github.ref_name }}&quot; &gt;&gt; $GITHUB_ENV</span></span>
<span class="line"><span style="color:#A6ACCD;">          fi</span></span>
<span class="line"><span style="color:#A6ACCD;">      - name: Pull image from GitHub Container Registry</span></span>
<span class="line"><span style="color:#A6ACCD;">        run: docker pull ghcr.io/\${{ github.repository_owner }}/fastgpt0628:\${{env.IMAGE_TAG}}</span></span>
<span class="line"><span style="color:#A6ACCD;">      - name: Tag image with Docker Hub repository name and version tag</span></span>
<span class="line"><span style="color:#A6ACCD;">        run: docker tag ghcr.io/\${{ github.repository_owner }}/fastgpt0628:\${{env.IMAGE_TAG}} \${{ secrets.DOCKER_IMAGE_NAME }}:\${{env.IMAGE_TAG}}</span></span>
<span class="line"><span style="color:#A6ACCD;">      - name: Push image to Docker Hub</span></span>
<span class="line"><span style="color:#A6ACCD;">        run: docker push \${{ secrets.DOCKER_IMAGE_NAME }}:\${{env.IMAGE_TAG}}</span></span></code></pre></div>`,13),p=[o];function t(r,c,i,A,C,u){return n(),a("div",null,p)}const d=s(l,[["render",t]]);export{g as __pageData,d as default};
