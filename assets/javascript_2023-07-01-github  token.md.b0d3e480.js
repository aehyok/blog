import{_ as s,o as a,c as n,b as e}from"./app.39978e14.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"github settings中的 Developer settings","slug":"github-settings中的-developer-settings","link":"#github-settings中的-developer-settings","children":[]},{"level":2,"title":"ghcr.io 服务器无法访问","slug":"ghcr-io-服务器无法访问","link":"#ghcr-io-服务器无法访问","children":[]},{"level":2,"title":"Error response from daemon: Head \\"https://ghcr.io/v2/***/fastgpt0628/manifests/latest\\": unauthorized","slug":"error-response-from-daemon-head-https-ghcr-io-v2-fastgpt0628-manifests-latest-unauthorized","link":"#error-response-from-daemon-head-https-ghcr-io-v2-fastgpt0628-manifests-latest-unauthorized","children":[]},{"level":2,"title":"缓存设置","slug":"缓存设置","link":"#缓存设置","children":[]},{"level":2,"title":"next.js 也可以编译为静态文件","slug":"next-js-也可以编译为静态文件","link":"#next-js-也可以编译为静态文件","children":[]},{"level":2,"title":"生成镜像 ghcr.io同步到docker.com","slug":"生成镜像-ghcr-io同步到docker-com","link":"#生成镜像-ghcr-io同步到docker-com","children":[]}],"relativePath":"javascript/2023-07-01-github  token.md","lastUpdated":1710497801000}'),l={name:"javascript/2023-07-01-github  token.md"},p=e(`<h2 id="github-settings中的-developer-settings" tabindex="-1">github settings中的 Developer settings <a class="header-anchor" href="#github-settings中的-developer-settings" aria-hidden="true">#</a></h2><ul><li><a href="https://github.com/settings/tokens" target="_blank" rel="noreferrer">https://github.com/settings/tokens</a></li></ul><h2 id="ghcr-io-服务器无法访问" tabindex="-1"><a href="http://ghcr.io" target="_blank" rel="noreferrer">ghcr.io</a> 服务器无法访问 <a class="header-anchor" href="#ghcr-io-服务器无法访问" aria-hidden="true">#</a></h2><p>可以将镜像上传到docker.com即可</p><h2 id="error-response-from-daemon-head-https-ghcr-io-v2-fastgpt0628-manifests-latest-unauthorized" tabindex="-1">Error response from daemon: Head &quot;<a href="https://ghcr.io/v2/***/fastgpt0628/manifests/latest" target="_blank" rel="noreferrer">https://ghcr.io/v2/***/fastgpt0628/manifests/latest</a>&quot;: unauthorized <a class="header-anchor" href="#error-response-from-daemon-head-https-ghcr-io-v2-fastgpt0628-manifests-latest-unauthorized" aria-hidden="true">#</a></h2><p>设置packages private为public</p><ul><li><a href="https://github.com/users/aehyok/packages/container/fastgpt0628/settings" target="_blank" rel="noreferrer">https://github.com/users/aehyok/packages/container/fastgpt0628/settings</a></li></ul><h2 id="缓存设置" tabindex="-1">缓存设置 <a class="header-anchor" href="#缓存设置" aria-hidden="true">#</a></h2><ul><li><a href="https://docs.github.com/zh/actions/using-workflows/caching-dependencies-to-speed-up-workflows" target="_blank" rel="noreferrer">https://docs.github.com/zh/actions/using-workflows/caching-dependencies-to-speed-up-workflows</a></li></ul><h2 id="next-js-也可以编译为静态文件" tabindex="-1">next.js 也可以编译为静态文件 <a class="header-anchor" href="#next-js-也可以编译为静态文件" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">https://nextjs.org/docs/app/building-your-application/deploying/static-exports#deploying</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="生成镜像-ghcr-io同步到docker-com" tabindex="-1">生成镜像 <a href="http://ghcr.xn--iodocker-pw7mq7mrp5f.com" target="_blank" rel="noreferrer">ghcr.io同步到docker.com</a> <a class="header-anchor" href="#生成镜像-ghcr-io同步到docker-com" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">name: Build images and copy image to docker</span></span>
<span class="line"><span style="color:#babed8;">on:</span></span>
<span class="line"><span style="color:#babed8;">  workflow_dispatch:</span></span>
<span class="line"><span style="color:#babed8;">  push:</span></span>
<span class="line"><span style="color:#babed8;">    branches:</span></span>
<span class="line"><span style="color:#babed8;">      - &#39;main&#39;</span></span>
<span class="line"><span style="color:#babed8;">    tags:</span></span>
<span class="line"><span style="color:#babed8;">      - &#39;v*.*.*&#39;</span></span>
<span class="line"><span style="color:#babed8;">jobs:</span></span>
<span class="line"><span style="color:#babed8;">  build-images:</span></span>
<span class="line"><span style="color:#babed8;">    runs-on: ubuntu-20.04</span></span>
<span class="line"><span style="color:#babed8;">    steps:</span></span>
<span class="line"><span style="color:#babed8;">      - name: Checkout</span></span>
<span class="line"><span style="color:#babed8;">        uses: actions/checkout@v3</span></span>
<span class="line"><span style="color:#babed8;">        with:</span></span>
<span class="line"><span style="color:#babed8;">          fetch-depth: 1</span></span>
<span class="line"><span style="color:#babed8;">      - name: Install Dependencies</span></span>
<span class="line"><span style="color:#babed8;">        run: |</span></span>
<span class="line"><span style="color:#babed8;">          sudo apt update &amp;&amp; sudo apt install -y nodejs npm</span></span>
<span class="line"><span style="color:#babed8;">      - name: Set up QEMU (optional)</span></span>
<span class="line"><span style="color:#babed8;">        uses: docker/setup-qemu-action@v2</span></span>
<span class="line"><span style="color:#babed8;">      - name: Set up Docker Buildx</span></span>
<span class="line"><span style="color:#babed8;">        uses: docker/setup-buildx-action@v2</span></span>
<span class="line"><span style="color:#babed8;">        with:</span></span>
<span class="line"><span style="color:#babed8;">          driver-opts: network=host</span></span>
<span class="line"><span style="color:#babed8;">      - name: Login to GitHub Container Registry</span></span>
<span class="line"><span style="color:#babed8;">        uses: docker/login-action@v2</span></span>
<span class="line"><span style="color:#babed8;">        with:</span></span>
<span class="line"><span style="color:#babed8;">          registry: ghcr.io</span></span>
<span class="line"><span style="color:#babed8;">          username: \${{ github.repository_owner }}</span></span>
<span class="line"><span style="color:#babed8;">          password: \${{ secrets.GH_PAT }}</span></span>
<span class="line"><span style="color:#babed8;">      - name: Set DOCKER_REPO_TAGGED based on branch or tag</span></span>
<span class="line"><span style="color:#babed8;">        run: |</span></span>
<span class="line"><span style="color:#babed8;">          if [[ &quot;\${{ github.ref_name }}&quot; == &quot;main&quot; ]]; then</span></span>
<span class="line"><span style="color:#babed8;">            echo &quot;DOCKER_REPO_TAGGED=ghcr.io/\${{ github.repository_owner }}/fastgpt0628:latest&quot; &gt;&gt; $GITHUB_ENV</span></span>
<span class="line"><span style="color:#babed8;">          else</span></span>
<span class="line"><span style="color:#babed8;">            echo &quot;DOCKER_REPO_TAGGED=ghcr.io/\${{ github.repository_owner }}/fastgpt0628:\${{ github.ref_name }}&quot; &gt;&gt; $GITHUB_ENV</span></span>
<span class="line"><span style="color:#babed8;">          fi</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">      - name: Build and publish image for main branch or tag push event</span></span>
<span class="line"><span style="color:#babed8;">        env:</span></span>
<span class="line"><span style="color:#babed8;">          DOCKER_REPO_TAGGED: \${{ env.DOCKER_REPO_TAGGED }}</span></span>
<span class="line"><span style="color:#babed8;">        run: |</span></span>
<span class="line"><span style="color:#babed8;">          docker buildx build \\</span></span>
<span class="line"><span style="color:#babed8;">          --platform linux/amd64,linux/arm64 \\</span></span>
<span class="line"><span style="color:#babed8;">          --label &quot;org.opencontainers.image.source=  https://github.com/  \${{ github.repository_owner }}/fastgpt0628&quot; \\</span></span>
<span class="line"><span style="color:#babed8;">          --label &quot;org.opencontainers.image.description=fastgpt0628 image&quot; \\</span></span>
<span class="line"><span style="color:#babed8;">          --label &quot;org.opencontainers.image.licenses=MIT&quot; \\</span></span>
<span class="line"><span style="color:#babed8;">          --push \\</span></span>
<span class="line"><span style="color:#babed8;">          -t \${DOCKER_REPO_TAGGED} \\</span></span>
<span class="line"><span style="color:#babed8;">          -f Dockerfile \\</span></span>
<span class="line"><span style="color:#babed8;">          .</span></span>
<span class="line"><span style="color:#babed8;">  push-to-docker-hub:</span></span>
<span class="line"><span style="color:#babed8;">    needs: build-images</span></span>
<span class="line"><span style="color:#babed8;">    runs-on: ubuntu-20.04</span></span>
<span class="line"><span style="color:#babed8;">    steps:</span></span>
<span class="line"><span style="color:#babed8;">      - name: Checkout code</span></span>
<span class="line"><span style="color:#babed8;">        uses: actions/checkout@v3</span></span>
<span class="line"><span style="color:#babed8;">      - name: Login to Docker Hub</span></span>
<span class="line"><span style="color:#babed8;">        uses: docker/login-action@v2</span></span>
<span class="line"><span style="color:#babed8;">        with:</span></span>
<span class="line"><span style="color:#babed8;">          username: \${{ secrets.DOCKER_HUB_NAME }}</span></span>
<span class="line"><span style="color:#babed8;">          password: \${{ secrets.DOCKER_HUB_PASSWORD }}</span></span>
<span class="line"><span style="color:#babed8;">      - name: Set DOCKER_REPO_TAGGED based on branch or tag</span></span>
<span class="line"><span style="color:#babed8;">        run: |</span></span>
<span class="line"><span style="color:#babed8;">          if [[ &quot;\${{ github.ref_name }}&quot; == &quot;main&quot; ]]; then</span></span>
<span class="line"><span style="color:#babed8;">            echo &quot;IMAGE_TAG=latest&quot; &gt;&gt; $GITHUB_ENV</span></span>
<span class="line"><span style="color:#babed8;">          else</span></span>
<span class="line"><span style="color:#babed8;">            echo &quot;IMAGE_TAG=\${{ github.ref_name }}&quot; &gt;&gt; $GITHUB_ENV</span></span>
<span class="line"><span style="color:#babed8;">          fi</span></span>
<span class="line"><span style="color:#babed8;">      - name: Pull image from GitHub Container Registry</span></span>
<span class="line"><span style="color:#babed8;">        run: docker pull ghcr.io/\${{ github.repository_owner }}/fastgpt0628:\${{env.IMAGE_TAG}}</span></span>
<span class="line"><span style="color:#babed8;">      - name: Tag image with Docker Hub repository name and version tag</span></span>
<span class="line"><span style="color:#babed8;">        run: docker tag ghcr.io/\${{ github.repository_owner }}/fastgpt0628:\${{env.IMAGE_TAG}} \${{ secrets.DOCKER_IMAGE_NAME }}:\${{env.IMAGE_TAG}}</span></span>
<span class="line"><span style="color:#babed8;">      - name: Push image to Docker Hub</span></span>
<span class="line"><span style="color:#babed8;">        run: docker push \${{ secrets.DOCKER_IMAGE_NAME }}:\${{env.IMAGE_TAG}}</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div>`,13),t=[p];function o(r,c,i,b,d,h){return a(),n("div",null,t)}const y=s(l,[["render",o]]);export{g as __pageData,y as default};
