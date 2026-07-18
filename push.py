import subprocess

cwd = r"C:\Users\Sasha\.gemini\antigravity\scratch\moms-website"

def run(cmd):
    print("Running:", cmd)
    res = subprocess.run(cmd, cwd=cwd, shell=True, capture_output=True, text=True)
    print("STDOUT:", res.stdout)
    print("STDERR:", res.stderr)

run("git init")
run("git config user.name \"Sasha Aslanov\"")
run("git config user.email \"sashaaslanov@cloud-cyber.com\"")
run("git branch -M main")
run("git remote remove origin")
run("git remote add origin https://github.com/sashaaslanovcloud-cyber/moms-website.git")
run("git add .")
run("git commit -m \"Initial commit: Yulia Aslanova multi-page website\"")
run("git push -u origin main --force")
