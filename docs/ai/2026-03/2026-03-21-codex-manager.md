

https://github.com/cnlimiter/codex-manager


```
docker run -d \
  -p 1455:1455 \
  -e WEBUI_HOST=0.0.0.0 \
  -e WEBUI_PORT=1455 \
  -e WEBUI_ACCESS_PASSWORD=aehyok \
  -v $(pwd)/data:/app/data \
  --name codex-register \
  ghcr.io/yunxilyf/codex-register:latest
```