# Understand how **DNS** resolves names to IPs
- DNS is like a phonebook.
- DNS translates the human-friendly name into a machine-friendly IP address.

- so, exactly how DNS Resolution works :

1️⃣ Check Local Cache
   - Your computer first checks:
   - Browser cache
   - Operating system DNS cache
   - Hosts file

If it already knows the IP, it stops here. ✅

2️⃣ Ask the Recursive Resolver
- Your computer asks a DNS resolver, usually provided by:
   - Your ISP
   - Or a public DNS like:
           - Google Public DNS (8.8.8.8)
           - Cloudflare (1.1.1.1)

This resolver does the heavy lifting for you.

3️⃣ Resolver Asks the Root Server
-If the resolver doesn’t know the answer, it asks a Root DNS Server:
  - “Who handles .com domains?
- The root server replies:
  - “Ask the .com TLD server.”

4️⃣ Ask the TLD Server
- TLD = Top Level Domain (like .com, .org, .net)
- The resolver asks the .com server:
   - “Who is responsible for google.com?”
- The TLD server replies:
   - “Ask Google’s authoritative nameserver.”

5️⃣ Ask the Authoritative Name Server
- Now the resolver asks Google’s authoritative DNS server:
  - “What is the IP for www.google.com?”
- It replies with something like:
  - 142.250.190.78

6️⃣ Return the Answer
- The resolver:
  - Sends the IP back to your computer
  - Caches it (so next time it's faster)

## _Your browser can now connect to that IP address 🎉_

📦 Visual Summary
You → Resolver → Root → TLD → Authoritative Server
                         ↑
                      Answer

Then the answer flows back to you.

⚡ Why It’s Fast
- DNS usually takes milliseconds because:
   - Results are cached everywhere
   - You rarely go through the full process

🏁 Final Key Idea
- DNS is a hierarchical distributed system that:
   - Translates domain names → IP addresses
   - Uses caching to improve speed
   - Works in layers (root → TLD → authoritative)

# Caching 

🧠 Big Picture :
   - DNS caching = temporarily storing DNS answers so future requests are faster.
   - Caching happens at multiple layers:
   - Browser cache
   - Operating system cache
   - Router cache (sometimes)
   - Recursive resolver cache (ISP / public DNS like Google Public DNS or Cloudflare)

⏳ The Core Concept: TTL (Time To Live)
- Every DNS record has a TTL (Time To Live) value.

🏗️ What Exactly Gets Cached?

Resolvers cache:
- A records : Domain → IPv4
- AAAA records : Domain → IPv6
- CNAME records : Aliases One Domain → another Domain
- MX records : Mail server responsible for receiving email for a domain.
- NS records :  Authoritative name servers for a domain.
- Even TLD referrals

🧠 How ( Top Level Domain ) TLDs Fit in DNS Hierarchy
- DNS works like a tree:

            Root (.)
                ↓
            TLD (.com)
                ↓
            Second-level domain (example)
                ↓
            Subdomain (www)

1. So in www.example.com
- com = TLD
- example = Second-level domain
- www = Subdomain

🔥 Quick Interview Summary
-TLD = last part of a domain name.
-Examples: .com, .org, .us
-Managed globally by ICANN.
-Can be generic (gTLD) or country-based (ccTLD).
-This reduces future lookups drastically.

🚀 Why Caching Is Powerful
- Without caching:
    - Root servers would be overwhelmed.
- With caching:
    - Resolver answers instantly.

Root servers rarely get asked.

This is why the DNS system scales globally.

🧊 Cold vs Warm Cache
- Cold Cache : Resolver has no stored data → full lookup required.
- Warm Cache : Resolver already has data → instant reply (milliseconds).

🌍 Real-World Impact
- Public DNS resolvers like:
   - Google Public DNS
   - Cloudflare

Answer billions of queries per day — mostly from cache.

They rarely need to hit root servers because of heavy caching.

🏁 Final Summary
DNS caching:
-    Stores DNS responses temporarily
-    Uses TTL to control lifetime
-    Happens at multiple layers
-    Greatly reduces global DNS traffic
-    Improves speed massively

    Can cause propagation delays when records change


# - Learn **IP addressing** (IPv4, public vs private)
IP Address: Internet Protocol Address is a unique identifier assigned to a device on a network , which allows it to communicte through other devices over the internet.

IPv4 :Internet Protocol version 4
32 - bit address
eg. 192.168.2.10  comprises 4 octets 8 bits each
4.3 billion ~ Total address

Public IP Address : assigned by an ISP globally unique, used on the internet example 8.8.8.8
- Private Address : used inside local networks not routable on the internet , reused across different networks
- Private IP Ranges (Reserved By IANA Internet Assigned Numbers Authority)
- Class Range IPv4 (A-E), before CIDR (Classless Inter- Domain Routing) were divided into classes - based on the first octet
- CIDR Replaced classless Networking: Instead of fixed classses iP_address/prefix
- 192.168.1.0/24 
- /x = number of Netwok bits
- 32-x= host bits
- Private IP Ranges are defined by Internet Assigned Numbers Authority _(RFC 1918)_
- No waste like old class A/B/C System

- Break down **CIDR notation** and **subnetting** basics

Why Subnet?

   - Reduce broadcast traffic
   - Improve security
   - Organize networks logically
   - Use IP space efficiently

- Know common **ports** and why they matter

Ports range from 0–65535

| Port  | Protocol | Purpose                 |
| ----- | -------- | ----------------------- |
| 20/21 | FTP      | File transfer           |
| 22    | SSH      | Secure remote login     |
| 23    | Telnet   | Remote login (insecure) |
| 25    | SMTP     | Email sending           |
| 53    | DNS      | Domain name resolution  |
| 80    | HTTP     | Web traffic             |
| 443   | HTTPS    | Secure web traffic      |
| 110   | POP3     | Email retrieval         |
| 143   | IMAP     | Email retrieval         |

Port categories
| Range       | Type                |
| ----------- | ------------------- |
| 0–1023      | Well-known          |
| 1024–49151  | Registered          |
| 49152–65535 | Dynamic / Ephemeral |

🧠 Quick Interview-Ready Summary
-IPv4 = 32-bit address, public vs private ranges defined by IANA.
-CIDR = IP/prefix format that defines network size.
-Subnetting = dividing networks into smaller segments.
-Ports = identify services running on a host.
-80 = HTTP, 443 = HTTPS, 22 = SSH, 53 = DNS.

## NAT : Network Address Translation 
is a technique that allows a private IP Address to communicate with the public internet using one public IP Address.

It was created to solve IPv4 address exhaustion.

🛜 Basic NAT Flow (Home Network Example)
Your setup:
- Laptop: 192.168.1.10
- Router (LAN side): 192.168.1.1
- Router (WAN/public side): 203.0.113.5 (public IP from ISP)

your laptop sends :
- Source IP: 192.168.1.10
- Destination IP: Public Web Server
- Source Port: 54321 (random)
- Destination Port: 443 (HTTPS)

2️⃣ Router Translates (NAT Happens Here)
Your router changes:
- Source IP: 192.168.1.10 --> _Source IP: 203.0.113.5_

It also records this in a NAT table:
| Private IP   | Private Port | Public IP   | Public Port |
| ------------ | ------------ | ----------- | ----------- |
| 192.168.1.10 | 54321        | 203.0.113.5 | 61000       |

Now packet goes to the internet.

Types of NAT : Static, Dynamic, PAT (Port address Translation) it is also called NAT overload

Conserves IP, Add basic security hiding private IP

🚀 Interview-Level Understanding
- Private IPs are not internet-routable.
- NAT translates private → public.
- PAT allows multiple devices to share one public IP.
- NAT works by rewriting IP headers and tracking ports.
- Outbound connections work automatically.
- Inbound connections require port forwarding.

This is concept-focused — research, understand, and document in your own words.