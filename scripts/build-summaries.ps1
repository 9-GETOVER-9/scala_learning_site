$ErrorActionPreference = "Stop"
$projectRoot = Split-Path -Parent $PSScriptRoot
Push-Location $projectRoot
try {
  node "scripts/build-summaries.mjs"
  if ($LASTEXITCODE -ne 0) {
    throw "课程总结生成失败，Node.js 退出代码：$LASTEXITCODE"
  }
}
finally {
  Pop-Location
}
