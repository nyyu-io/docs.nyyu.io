---
id: bug-bounty
title: NYYU Bug Bounty Program
sidebar_label: Bug Bounty
sidebar_position: 5
---

# NYYU Bug Bounty Program

## Overview

Dear Users, we are excited to announce the launch of our new bug bounty program on BugCrowd, one of the leading cybersecurity platforms. To ensure a secure environment for our users as we continue to grow, we are enlisting the expertise of the community to enhance the security of the [NYYU platform](https://nyyu.io).

## Rules

Rewards are divided into five tiers, depending on their severity. Each tier has different rewards (in USD).

| Severity  | Reward          |
|-----------|------------------|
| Extreme   | 10,000 USD       |
| Critical  | 3,000 - 5,000 USD|
| High      | 1,000 - 2,000 USD|
| Medium    | 200 - 400 USD    |
| Low       | 50 - 100 USD     |

If we accept your bug/vulnerability report, we will pay you the reward in USDT.

Please note that the threat level will be determined by NYYU security staff, and NYYU has the sole discretion in deciding whether a report meets the reward criteria.

## Scope of Vulnerabilities

### In-Scope Targets

| Target Type                    | Type       |
|--------------------------------|------------|
| *.nyyu.io                      | Web        |
| NYYU Mobile Application for Android | Android    |
| NYYU Mobile Application for iOS    | iOS        |

### Out-of-Scope Targets

| Target                         | Type       |
|--------------------------------|------------|
| cert.nyyu.io                   | Web        |
| Zendesk                        | Web        |
| SandBox                        | Web        |
| NYYU store                     | Web        |
| API docs                       | Web        |
| intro.nyyu.io                  | Web        |
| passport.nyyu.io               | Web        |
| sandbox-*.nyyu.io              | Web        |
| *-sdb.nyyu.io                  | Web        |
| *-sandbox.nyyu.io              | Web        |

## Criteria

We are mostly interested in the following vulnerabilities:

### Web Module

- Problems with business logic that may result in the loss of user assets.
- Payment manipulation.
- Remote code execution (RCE).
- Leakage of sensitive information.
- Critical OWASP issues such as XSS, CSRF, SQLi, SSRF, IDOR, and others.
- Other vulnerabilities that may result in potential loss.

### Mobile Module

- Functions that can access unsafe external links.
- Jsbridge/javascriptinterface that can be called to harm users.
- Other vulnerabilities that may result in potential loss.

### Out-of-Scope Vulnerabilities

#### Web Module

- Theoretical loopholes that are not actually proven.
- Email verification code flaws, expired password reset links, and issues with password complexity policies.
- Records with invalid or missing sender information.
- Clickjacking and UI redirection with only minor security impact.
- Vulnerabilities in third-party applications.
- Zero-day exploits that are less than 30 days old.
- Social engineering, phishing, and other forms of deception.
- Denial of service (DoS) attacks.
- Email/phone number information enumeration (e.g., resetting passwords to verify emails or phone numbers).
- Data leaks with minor security impact (e.g., stack tracing, path exposure, directory listing, and log information).
- Known issues, duplicate submissions, or security issues that have already been disclosed.
- Physical attacks.
- XSS for PCs.
- Vulnerabilities that can only be exploited on older versions of browsers or platforms.
- Vulnerabilities in auto-filling web forms.
- Using known codebase vulnerabilities without actual proof.
- Lack of security flags in cookies.
- Issues related to insecure SSL/TLS socket or protocol versions.
- Content-based deception.
- Issues related to cache management.
- Internal IP or domain name leakages.
- Missing security headers that cannot be directly exploited.
- CSRF issues with negligible impact (such as add to favorites, add to cart, subscribe, etc.)
- Issues with no security impact.
- Assets that do not belong to NYYU.
- Behavior that disrupts the normal operation of the business (DoS/DDoS).
- Issues with installation path permissions.
- Automated tools or scanned reports.
- Links to invalid or expired pages will only be accepted if you can prove that the currently submitted link is still in normal use. Issues found through past announcements or blogs will not be accepted.

#### Mobile Module

- Vulnerabilities that require Root/Jailbreak permissions.
- Physical vulnerabilities that require manipulation of the user's device.
- Vulnerabilities that require a lot of user interaction.
- Issues that only expose non-sensitive device information.
- Only static analysis performed on binary files with missing POC business logic.
- Lack of fuzzing, binary protection, or root (jailbreak) detection.
- Bypassing of device certificate detection.
- Missing Exp such as PIE, ARC, or stack exploits.
- Leakage of sensitive information in TLS-protected URLs or Requests.
- Binary path leaks.
- Hardcoded OAuth and APP keys present in APK and IPA.
- Scan reports for automated tools.
- Information leakage caused by sensitive information being stored in clear text on the user device.
- Crashes caused by sending malformed URL Schemes or components to receivers such as external Activity/Service/Broadcast (the leakage of sensitive data obtained by exploiting these schemes is within the scope of acceptable vulnerabilities).
- Shared link leaks via clipboard.
- API key leaks with no security implications (such as Google Map API keys).
- Other content outlined in the out-of-scope Web Module vulnerabilities.

## Report Evaluation Criteria

- **P0 - 10,000 USD**: Vulnerabilities that affect critical assets that could cause serious business disruption, such as access to NYYU-owned hot/cold wallet assets, funds, and/or wallet private keys.
- **P1 - 3,000 - 5,000 USD**: Vulnerabilities that could compromise the security of any user or business funds, including direct access to the system or core business, and other potential for significant damage.
- **P2 - 1,000 - 2,000 USD**: Vulnerabilities with similar impact as P1, but with the preconditions of exploitation and the impact of malicious exploitation, including unauthorized access, serious SQL injections, and high-risk data leaks.
- **P3 - 200 - 400 USD**: Issues that affect certain users, result in the access and modification of user information, etc.
- **P4 - 50 - 100 USD**: SMS spam, leakage of non-sensitive information.

## Feedback Channel

You can provide us with feedback through the following channels:

Submit a report to us via BugCrowd when status change to public.

## Event Statement

- It is strictly forbidden to use penetration testing as an excuse to exploit vulnerabilities and threat intelligence to damage the interests of users, affect normal business operations, or steal user data.
- Modification of the NYYU database or destruction of data through the use of identified bugs or vulnerabilities is strictly prohibited.
- Automated testing using scanning tools is strictly prohibited.
- Testing on accounts other than those you own is strictly prohibited.
- [NYYU platform](https://nyyu.io) reserves the right to the final interpretation of the event.