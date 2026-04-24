from PIL import Image, ImageDraw
import math

SIZE = 40

def create_pacman():
    img = Image.new("RGBA", (SIZE, SIZE), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)

    # 本体（黄色）
    cx, cy = SIZE // 2, SIZE // 2
    r = 16

    # 口の角度（開き具合）
    mouth_angle = 0.35 * math.pi

    # 円（パックマン本体）
    draw.pieslice(
        [cx - r, cy - r, cx + r, cy + r],
        start=int(mouth_angle * 180 / math.pi),
        end=int((2 * math.pi - mouth_angle) * 180 / math.pi),
        fill=(255, 220, 0),
    )

    return img


def create_coin():
    img = Image.new("RGBA", (SIZE, SIZE), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)

    draw.ellipse([15, 15, 25, 25], fill=(255, 180, 0))

    return img


def create_wall():
    img = Image.new("RGBA", (SIZE, SIZE), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)

    # ベース（重い色）
    draw.rectangle([0, 0, SIZE, SIZE], fill=(60, 60, 60))

    # 上ハイライト（立体感）
    draw.line([0, 0, SIZE, 0], fill=(120, 120, 120), width=3)
    draw.line([0, 0, 0, SIZE], fill=(120, 120, 120), width=3)

    # 下シャドウ
    draw.line([0, SIZE-1, SIZE, SIZE-1], fill=(20, 20, 20), width=3)
    draw.line([SIZE-1, 0, SIZE-1, SIZE], fill=(20, 20, 20), width=3)

    return img


def create_goal():
    img = Image.new("RGBA", (SIZE, SIZE), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)

    draw.rectangle([10, 10, 30, 30], outline=(0, 255, 150), width=3)

    return img

def create_floor():
    img = Image.new("RGBA", (SIZE, SIZE), (0, 0, 0, 255))
    draw = ImageDraw.Draw(img)

    # ベース（かなり暗め）
    draw.rectangle([0, 0, SIZE, SIZE], fill=(25, 25, 25))

    # タイル模様（うっすら）
    for i in range(0, SIZE, 10):
        draw.line([(i, 0), (i, SIZE)], fill=(35, 35, 35))
        draw.line([(0, i), (SIZE, i)], fill=(35, 35, 35))

    # ちょいノイズ感（ランダムドット風）
    for x in range(0, SIZE, 8):
        for y in range(0, SIZE, 8):
            draw.point((x, y), fill=(30, 30, 30))

    return img

# 保存
# create_pacman().save("player.png")
# create_coin().save("coin.png")
create_wall().save("wall.png")
# create_goal().save("goal.png")
create_floor().save("floor.png")

print("done")