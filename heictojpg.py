import os
from PIL import Image
import pillow_heif as pyheif

def heic_to_jpg(heic_path, jpg_path):
    # Open the HEIC file
    heif_file = pyheif.read(heic_path)
    
    # Convert the HEIC to an Image object
    image = Image.frombytes(
        heif_file.mode, 
        heif_file.size, 
        heif_file.data, 
        "raw", 
        heif_file.mode, 
        heif_file.stride,
    )
    
    # Save the image as a JPG file
    image.save(jpg_path, "JPEG")

def convert_all_heic_to_jpg(directory):
    # Get the absolute path of the directory
    abs_dir = os.path.abspath(directory)
    
    # Loop through all files in the directory
    for filename in os.listdir(abs_dir):
        if filename.lower().endswith(".heic"):
            heic_path = os.path.join(abs_dir, filename)
            jpg_filename = os.path.splitext(filename)[0] + ".jpg"
            jpg_path = os.path.join(abs_dir, jpg_filename)
            
            # Convert HEIC to JPG
            heic_to_jpg(heic_path, jpg_path)
            print(f"Converted {heic_path} to {jpg_path}")

# Example usage: call this with the relative path to your directory
convert_all_heic_to_jpg('./photos')  # Change './images' to your directory