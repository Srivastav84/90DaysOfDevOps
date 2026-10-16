# Little Moments — Docker Photo Gallery

A responsive, dark editorial-style photo gallery served by Nginx in a Docker container.

## 1. Build the Docker image (on your laptop)

From this folder:

```bash
docker build -t little-moments:1.0 .
```

Confirm the image exists:

```bash
docker images
```

## 2. Run it locally

```bash
docker run -d --name little-moments -p 8080:80 little-moments:1.0
```

Open http://localhost:8080

Useful checks:

```bash
docker ps
docker logs little-moments
docker stop little-moments
docker start little-moments
```

To remove the container:

```bash
docker rm -f little-moments
```

## 3. Host it on an AWS EC2 instance

Recommended beginner path: create an Ubuntu EC2 instance, install Docker, then build or pull the image on EC2.

### Create the instance
1. AWS Console → EC2 → Launch instance → Ubuntu Server LTS.
2. For a learning demo, choose an instance size eligible for your account's free-tier/credit terms. Review the current estimate before launch.
3. Create/select a key pair and keep the `.pem` file private.
4. In the instance's Security Group, add inbound rules:
   - SSH, TCP 22, **My IP** only.
   - HTTP, TCP 80, `0.0.0.0/0` (and `::/0` if using IPv6).
5. Launch and copy the instance's **Public IPv4 address**.

### Connect over SSH
On macOS/Linux/WSL:

```bash
chmod 400 your-key.pem
ssh -i your-key.pem ubuntu@YOUR_EC2_PUBLIC_IP
```

On Windows, use PowerShell with the downloaded `.pem` key, or WSL. Replace the key filename and IP.

### Install Docker on Ubuntu EC2
Run on the EC2 machine:

```bash
sudo apt-get update
sudo apt-get install -y docker.io
sudo systemctl enable --now docker
sudo usermod -aG docker ubuntu
```

Log out and SSH back in so the group change applies. Verify:

```bash
docker --version
docker run --rm hello-world
```

### Option A — copy the project folder to EC2
Run this from your **local computer**, in the directory containing the project folder:

```bash
scp -i your-key.pem -r docker-photo-gallery ubuntu@YOUR_EC2_PUBLIC_IP:~
```

Then SSH into EC2 and run:

```bash
cd ~/docker-photo-gallery
docker build -t little-moments:1.0 .
docker run -d --name little-moments --restart unless-stopped -p 80:80 little-moments:1.0
docker ps
```

### Option B — use Docker Hub (more reusable)
1. Create a Docker Hub repository.
2. On your laptop, log in and tag/push the image (replace `YOUR_DOCKERHUB_USERNAME`):

```bash
docker login
docker tag little-moments:1.0 YOUR_DOCKERHUB_USERNAME/little-moments:1.0
docker push YOUR_DOCKERHUB_USERNAME/little-moments:1.0
```

3. On EC2, pull and run:

```bash
docker pull YOUR_DOCKERHUB_USERNAME/little-moments:1.0
docker run -d --name little-moments --restart unless-stopped -p 80:80 YOUR_DOCKERHUB_USERNAME/little-moments:1.0
```

## 4. Open your live gallery

Visit:

```text
http://YOUR_EC2_PUBLIC_IP
```

Use **http** for this starter project; HTTPS requires a domain and TLS setup. Images and fonts load from external services, so visitors need internet access.

## Troubleshooting

- **Site doesn't load:** confirm EC2 Security Group allows inbound TCP 80 from `0.0.0.0/0`.
- **Container not running:** `docker ps -a` and `docker logs little-moments`.
- **Port 80 is busy:** `sudo ss -ltnp | grep ':80'`; stop the service already using it, or use `-p 8080:80` and allow TCP 8080 in the Security Group.
- **Can't run Docker without sudo:** log out and back in after `sudo usermod -aG docker ubuntu`; or temporarily prefix Docker commands with `sudo`.
- **Image photos missing:** the gallery uses remote Unsplash images; check outbound internet access.

## Cost and security reminders

- Stop or terminate the EC2 instance when you're finished. A stopped instance generally stops compute charges, but attached EBS storage and some other resources can still incur charges. Review your AWS Billing dashboard.
- Never share your private key or open SSH (port 22) to the whole internet.
- This demo uses plain HTTP and is not intended for sensitive data or production traffic.

## remember

FROM — choose the base image.

LABEL — add image metadata.

COPY — add files to the image.

EXPOSE — document the intended container port.

CMD — specify the default startup command.