Below is a comprehensive Markdown document you can paste into a new chat to continue troubleshooting efficiently.

It includes:

* Environment context
* Exact error
* Scope analysis
* Current configuration
* What has already been attempted
* Clear next diagnostic steps

---

```md
# TikTok Sandbox Integration Issue – Postiz (Self-Hosted)

## Overview

I am attempting to connect a self-hosted Postiz instance to TikTok using the TikTok Developer Sandbox environment in order to record the required demo video for app review.

The Postiz instance is:

- Internal-use only
- User registration disabled
- Hosted at: https://pstz.teknicom.co.uk
- Domain verified in TikTok Developer Console
- Using Sandbox app credentials (not production)

The integration fails during OAuth with a scope-related error.

---

## Exact OAuth Error

Redirect URL includes:

```

&scope=video.list%2Cuser.info.basic%2Cvideo.publish%2Cvideo.upload%2Cuser.info.profile%2Cuser.info.stats
&error=invalid_scope
&error_type=scope

```

TikTok error shown:

> We couldn't log in with TikTok. This may be due to specific app settings.  
> scope – Refer to our Developer Documentation

---

## Current TikTok App Configuration

Environment:
- Using Sandbox app (created via TikTok Developer Portal)

Products enabled:
- Login Kit
- Content Posting API

Products NOT enabled:
- Share Kit
- Webhooks
- Data Portability API

Redirect URI configured:
```

[https://pstz.teknicom.co.uk/integrations/social/tiktok](https://pstz.teknicom.co.uk/integrations/social/tiktok)

```

Domain verified successfully.

Privacy Policy + Terms:
- Hosted on teknicom.co.uk
- Accepted by TikTok

---

## Scopes Being Requested by Postiz

Postiz is requesting:

- video.list
- user.info.basic
- video.publish
- video.upload
- user.info.profile
- user.info.stats

The error suggests at least one of these scopes is not permitted for the Sandbox app.

---

## Expected Minimum Scopes for Postiz

According to Postiz documentation, required scopes should be:

- user.info.basic
- user.info.profile
- video.upload
- video.publish
- video.create (if applicable depending on API version)

Notably:
- video.list is not required for publishing
- user.info.stats is not required for publishing

These two scopes appear unnecessary for a simple publish-only workflow.

---

## Problem Hypothesis

Postiz appears to be automatically requesting additional scopes:

- video.list
- user.info.stats

These may:
- Require separate approval
- Not be available in Sandbox
- Not be enabled in current TikTok app configuration

Result: TikTok returns `invalid_scope`

---

## Deployment Details

Postiz is self-hosted.

(Replace this section with actual deployment info before sending in new chat)

- Deployment method: Docker Compose
- Version / Image tag: (insert exact version)
- Environment variables used:
  - TIKTOK_CLIENT_ID
  - TIKTOK_CLIENT_SECRET
  - NEXTAUTH_URL
  - etc.

---

## What Has Already Been Checked

✔ Using Sandbox credentials  
✔ Redirect URI matches exactly  
✔ Domain verified  
✔ Login Kit enabled  
✔ Content Posting API enabled  
✔ Direct Post enabled  
✔ Only required products selected  
✔ Sandbox environment created  

Still receiving invalid_scope.

---

## What Needs To Be Determined

1. Where in Postiz the TikTok scopes are defined
2. Whether scopes can be overridden via environment variable
3. Whether this version of Postiz hardcodes extra scopes
4. Whether Sandbox restricts video.list or user.info.stats
5. Whether upgrading Postiz resolves scope issue

---

## Desired End State

Minimal working OAuth request with only:

- user.info.basic
- user.info.profile
- video.upload
- video.publish
- (video.create if required)

Successful sandbox login so demo video can be recorded for TikTok app review.

---

## Questions For Resolution

1. Where in Postiz source are TikTok scopes defined?
2. Can scopes be overridden in config?
3. Is this a known Postiz issue?
4. Does Sandbox reject video.list and user.info.stats by default?
5. Is video.create required for Content Posting API v2?

---

## Goal

Get successful OAuth connection in Sandbox so I can:

- Connect TikTok account
- Upload test video
- Record full integration flow
- Submit for TikTok review
```

---

If you would like, I can also generate:

* A second MD file tailored specifically for posting as a GitHub issue to Postiz
* A reduced “executive summary” version
* A technical deep-dive version for API debugging

Tell me which format you need.
