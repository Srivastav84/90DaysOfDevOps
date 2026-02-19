# - Understand how **DNS** resolves names to IPs
DNS is like a phonebook.
DNS translates the human-friendly name into a machine-friendly IP address.

so, exactly DNS Resolution works :

1️⃣ Check Local Cache
    Your computer first checks:
    Browser cache
    Operating system DNS cache
    Hosts file

If it already knows the IP, it stops here. ✅

2️⃣ Ask the Recursive Resolver
Your computer asks a DNS resolver, usually provided by:
    1. Your ISP
    2. Or a public DNS like:
            Google Public DNS (8.8.8.8)
            Cloudflare (1.1.1.1)

This resolver does the heavy lifting for you.

3️⃣ Resolver Asks the Root Server
If the resolver doesn’t know the answer, it asks a Root DNS Server:
    “Who handles .com domains?
The root server replies:
    “Ask the .com TLD server.”

4️⃣ Ask the TLD Server
TLD = Top Level Domain (like .com, .org, .net)
The resolver asks the .com server:
    “Who is responsible for google.com?”
The TLD server replies:
    “Ask Google’s authoritative nameserver.”

5️⃣ Ask the Authoritative Name Server
Now the resolver asks Google’s authoritative DNS server:
    “What is the IP for www.google.com?”
It replies with something like:
    142.250.190.78

6️⃣ Return the Answer
The resolver:
Sends the IP back to your computer
Caches it (so next time it's faster)

## _Your browser can now connect to that IP address 🎉_

📦 Visual Summary
You → Resolver → Root → TLD → Authoritative Server
                         ↑
                      Answer

Then the answer flows back to you.

⚡ Why It’s Fast
DNS usually takes milliseconds because:
Results are cached everywhere
You rarely go through the full process

🏁 Final Key Idea
DNS is a hierarchical distributed system that:
    Translates domain names → IP addresses
    Uses caching to improve speed
    Works in layers (root → TLD → authoritative)

# Caching 

🧠 Big Picture :
    DNS caching = temporarily storing DNS answers so future requests are faster.
    Caching happens at multiple layers:
    Browser cache
    Operating system cache
    Router cache (sometimes)
    Recursive resolver cache (ISP / public DNS like Google Public DNS or Cloudflare)

⏳ The Core Concept: TTL (Time To Live)
Every DNS record has a TTL (Time To Live) value.

🏗️ What Exactly Gets Cached?

Resolvers cache:
✅ A records : Domain → IPv4
✅ AAAA records : Domain → IPv6
✅ CNAME records : Aliases
✅ NS records : Name server info
✅ Even TLD referrals
    Example:
    When resolving google.com, the resolver may cache:
    .com TLD server addresses
    Google’s authoritative name servers
    Final A record

This reduces future lookups drastically.

🚀 Why Caching Is Powerful
Without caching:
    Root servers would be overwhelmed.
With caching:
    Resolver answers instantly.

Root servers rarely get asked.
This is why the DNS system scales globally.

🧊 Cold vs Warm Cache
Cold Cache : Resolver has no stored data → full lookup required.
Warm Cache : Resolver already has data → instant reply (milliseconds).

🌍 Real-World Impact
Public DNS resolvers like:
    Google Public DNS
    Cloudflare

Answer billions of queries per day — mostly from cache.
They rarely need to hit root servers because of heavy caching.

🏁 Final Summary
DNS caching:
    Stores DNS responses temporarily
    Uses TTL to control lifetime
    Happens at multiple layers
    Greatly reduces global DNS traffic
    Improves speed massively

    Can cause propagation delays when records change


# - Learn **IP addressing** (IPv4, public vs private)

- Break down **CIDR notation** and **subnetting** basics
- Know common **ports** and why they matter

This is concept-focused — research, understand, and document in your own words.