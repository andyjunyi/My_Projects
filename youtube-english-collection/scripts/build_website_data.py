#!/usr/bin/env python3
"""
Build sample_videos.json for 生活英語口袋酷 website
from all madingyingyu summary JSON files.
"""

import json, glob, os

SUMMARIES_DIR = "/mnt/e/My_Projects/youtube-english-collection/summaries/madingyingyu"
OUTPUT = "/mnt/e/My_Projects/youtube-english-collection/website/sample_videos.json"

files = sorted(glob.glob(os.path.join(SUMMARIES_DIR, "*.json")))
files = [f for f in files if "_index" not in f]

samples = []
for fpath in files:
    with open(fpath, encoding="utf-8") as f:
        d = json.load(f)

    entry = {
        "video_id": d.get("video_id", ""),
        "channel": d.get("channel", "馬丁英語 English with Martin"),
        "channel_url": d.get("channel_url", "https://www.youtube.com/@MaDingYingYu"),
        "title": d.get("title", ""),
        "title_original": d.get("title_original", d.get("title", "")),
        "published": d.get("published", ""),
        "url": d.get("url", ""),
        "duration_sec": d.get("duration_sec"),
        "views": d.get("views"),
        "likes": d.get("likes"),
        "comments": d.get("comments"),
        "category": d.get("category", "日常口語"),
        "tags": d.get("tags", []),
        "difficulty": d.get("difficulty", "★☆☆ 初級"),
        "summary_zh": d.get("summary_zh", ""),
        "key_points": d.get("key_points", []),
        "vocabulary": d.get("vocabulary", []),
        "example_sentences": d.get("example_sentences", []),
        "common_mistakes": d.get("common_mistakes", []),
        "teaching_tip": d.get("teaching_tip", ""),
        "student_tip": d.get("student_tip", d.get("teaching_tip", "")),
        "related_topics": d.get("related_topics", []),
        "collected_at": d.get("collected_at", ""),
    }
    samples.append(entry)

# Sort by published date descending (newest first)
samples.sort(key=lambda x: x.get("published", ""), reverse=True)

output_data = {"samples": samples}

with open(OUTPUT, "w", encoding="utf-8") as f:
    json.dump(output_data, f, ensure_ascii=False, indent=2)

print(f"✅ sample_videos.json updated!")
print(f"   Total samples: {len(samples)}")
print(f"   Newest: {samples[0]['published']} - {samples[0]['title'][:50]}")
print(f"   Oldest: {samples[-1]['published']} - {samples[-1]['title'][:50]}")

# Category breakdown
from collections import Counter
cats = Counter(s.get("category", "其他") for s in samples)
print(f"   Categories: {dict(cats)}")
