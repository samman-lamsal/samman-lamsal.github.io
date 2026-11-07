#!/usr/bin/env python3
"""Run AFTER GitHub Pages deployment to notify IndexNow-supporting engines.
Not a Google indexing API; do not run against unpublished/development URLs.
No external packages required. A URL notification does not guarantee indexing.
"""
from pathlib import Path
from urllib.request import Request, urlopen
import json, sys
from xml.etree import ElementTree as ET
ROOT = Path(__file__).resolve().parents[1]
BASE = 'https://masarpstudio.com'
KEY = '57de1df3295cc6c38881a2ef85258fe2'
NS = {'s': 'http://www.sitemaps.org/schemas/sitemap/0.9'}
urls = [x.text for x in ET.parse(ROOT/'sitemap.xml').findall('.//s:loc',NS)]
if not urls or not all(x.startswith(BASE+'/') for x in urls): raise SystemExit('Invalid sitemap URLs.')
key_url = BASE+'/'+KEY+'.txt'
try:
    with urlopen(key_url, timeout=12) as r:
        if r.read().decode().strip()!=KEY: raise RuntimeError('Published IndexNow key mismatch')
except Exception as exc:
    raise SystemExit('STOP: publish the ZIP first and verify the key file: '+str(exc))
if '--send' not in sys.argv:
    print('Dry run: '+str(len(urls))+' URLs, published key verified. Add --send to submit.')
    sys.exit(0)
body=json.dumps({'host':'masarpstudio.com','key':KEY,'keyLocation':key_url,'urlList':urls}).encode()
req=Request('https://api.indexnow.org/indexnow',data=body,headers={'Content-Type':'application/json; charset=utf-8'},method='POST')
try:
    with urlopen(req,timeout=30) as resp: print('IndexNow HTTP',resp.status, 'submitted',len(urls),'URLs')
except Exception as exc: raise SystemExit('IndexNow submission failed: '+str(exc))
