#!/bin/bash
# My_Projects 自動更新腳本
# 用途：將 E:\My_Projects 的變更自動 push 到 GitHub
# 使用方法：雙擊執行，或設成排程

cd "$(dirname "$0")"

# 檢查是否有變更
if [[ -z $(git status --porcelain) ]]; then
    echo "$(date): No changes to commit."
    exit 0
fi

# 顯示變更摘要
echo "=== Changes detected ==="
git status --short

# Add all
git add -A

# Commit with timestamp
git commit -m "Auto-update $(date '+%Y-%m-%d %H:%M')"

# Push
git push origin main

echo "=== Done: $(date) ==="
