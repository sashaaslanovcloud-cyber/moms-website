from PIL import Image
import os

img_path = r"C:\Users\Sasha\.gemini\antigravity\brain\44f711e5-5db4-4447-b6d7-c8e1dc7e7f9d\media__1784340230343.png"
if os.path.exists(img_path):
    img = Image.open(img_path)
    w, h = img.size
    crop_box = (int(w * 0.055), int(h * 0.038), int(w * 0.368), int(h * 0.424))
    cropped = img.crop(crop_box)
    out_dir = r"C:\Users\Sasha\.gemini\antigravity\scratch\moms-website\public"
    os.makedirs(out_dir, exist_ok=True)
    cropped.save(os.path.join(out_dir, "yulia-photo.jpg"))
    print("Photo successfully saved to public/yulia-photo.jpg")
else:
    print("Source image file not found:", img_path)
