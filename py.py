import pygame
import sys

# Initialize Pygame
pygame.init()

# Set up the display
width, height = 600, 600
window = pygame.display.set_mode((width, height))
pygame.display.set_caption("2D Geometric Transformations")

# Colors
white = (255, 255, 255)
red = (255, 0, 0)
blue = (0, 0, 255)

# Define a point (for demonstration)
point = pygame.Vector2(200, 200)

# Translation and scaling factors
tx, ty = 100, 50  # Translation factors
sx, sy = 1.5, 1.5  # Scaling factors

# Function for translating a point
def translate(point, tx, ty):
    return pygame.Vector2(point.x + tx, point.y + ty)

# Function for scaling a point
def scale(point, sx, sy):
    return pygame.Vector2(point.x * sx, point.y * sy)

# Main loop
running = True
while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

    # Clear the screen
    window.fill(white)

    # Draw the original point
    pygame.draw.circle(window, blue, point, 5)
    pygame.draw.line(window, blue, (0, point.y), (width, point.y), 1)  # Horizontal line
    pygame.draw.line(window, blue, (point.x, 0), (point.x, height), 1)  # Vertical line

    # Apply translation and scaling
    translated_point = translate(point, tx, ty)
    scaled_point = scale(point, sx, sy)

    # Draw the translated point
    pygame.draw.circle(window, red, translated_point, 5)
    pygame.draw.line(window, red, (0, translated_point.y), (width, translated_point.y), 1)  # Horizontal line
    pygame.draw.line(window, red, (translated_point.x, 0), (translated_point.x, height), 1)  # Vertical line

    # Draw the scaled point
    pygame.draw.circle(window, red, scaled_point, 5)
    pygame.draw.line(window, red, (0, scaled_point.y), (width, scaled_point.y), 1)  # Horizontal line
    pygame.draw.line(window, red, (scaled_point.x, 0), (scaled_point.x, height), 1)  # Vertical line

    # Update the display
    pygame.display.flip()

# Quit Pygame
pygame.quit()
sys.exit()
