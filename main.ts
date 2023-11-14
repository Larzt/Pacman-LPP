namespace SpriteKind {
    export const Coins = SpriteKind.create()
}
// Instanciar aleatoriamente
function PacmanMovement () {
    scene.cameraFollowSprite(Pacman)
    if (controller.up.isPressed()) {
        verticalMove = -1
        horizontalMove = 0
    } else if (controller.down.isPressed()) {
        verticalMove = 1
        horizontalMove = 0
    } else if (controller.right.isPressed()) {
        horizontalMove = 1
        verticalMove = 0
    } else if (controller.left.isPressed()) {
        horizontalMove = -1
        verticalMove = 0
    }
    Pacman.x += horizontalMove
    Pacman.y += verticalMove
}
function crearFruta (xF: number, yF: number) {
    spriteSize = 8
    spacing = (tileWidth - spriteSize) / 2
    objectSize = tileWidth - spacing
    objectSize = objectSize - 10
    fruta = sprites.create(assets.image`Fruit`, SpriteKind.Food)
    fruta.setPosition(xF * tileWidth + spacing + 4, yF * tileWidth + spacing + 4)
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Pacman,
    [img`
        . . . 5 5 5 5 5 . . 
        . 5 5 5 5 5 5 5 5 5 
        . 5 5 5 5 5 f 5 5 5 
        5 5 5 5 5 5 5 5 5 . 
        5 5 5 5 5 5 . . . . 
        5 5 5 5 . . . . . . 
        5 5 5 5 5 5 . . . . 
        5 5 5 5 5 5 5 5 5 . 
        . 5 5 5 5 5 5 5 5 5 
        . 5 5 5 5 5 5 5 5 5 
        . . . 5 5 5 5 5 . . 
        `,img`
        . . . 5 5 5 5 5 . . 
        . 5 5 5 5 5 5 5 5 5 
        . 5 5 5 5 5 f 5 5 5 
        5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 . . 
        5 5 5 5 5 5 . . . . 
        5 5 5 5 5 5 5 5 . . 
        5 5 5 5 5 5 5 5 5 5 
        . 5 5 5 5 5 5 5 5 5 
        . 5 5 5 5 5 5 5 5 5 
        . . . 5 5 5 5 5 . . 
        `,img`
        . . . 5 5 5 5 5 . . 
        . 5 5 5 5 5 5 5 5 5 
        . 5 5 5 5 5 f 5 5 5 
        5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 
        . 5 5 5 5 5 5 5 5 5 
        . 5 5 5 5 5 5 5 5 5 
        . . . 5 5 5 5 5 . . 
        `],
    100,
    true
    )
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Pacman,
    assets.animation`PacmanAnimation`,
    100,
    true
    )
})
info.onScore(100, function () {
    game.gameOver(true)
})
// Los alumnos deben de modificar este codigo
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    tiles.placeOnTile(sprite, tiles.getTileLocation(randint(7, 9), 7))
    info.changeLifeBy(-1)
})
// Instanciar aleatoriamente
function Monedas () {
    posiciones = []
    spacing = 0
    // Ancho de cada tile
    tileWidth = 16
    // Tamaño del sprite
    spriteSize = 8
    // Espacio para centrar el sprite en el tile
    spacing = (tileWidth - spriteSize) / 2
    objectSize = tileWidth - spacing
    objectSize = objectSize - 10
    for (let x = 0; x <= 16; x++) {
        for (let y = 0; y <= 16; y++) {
            coin22 = sprites.create(assets.image`coin`, SpriteKind.Coins)
            coin22.setPosition(x * tileWidth + spacing + 4, y * tileWidth + spacing + 4)
            generatedCoins += 1
        }
    }
    sprites.onOverlap(SpriteKind.Player, SpriteKind.Coins, function (sprite, otherSprite) {
        sprites.destroy(otherSprite, effects.spray, 100)
        generatedCoins -= 1
    })
game.onUpdate(function () {
            for (let coin2 of sprites.allOfKind(SpriteKind.Coins)) {
                // Truncar las coordenadas sin redondear hacia abajo
                let tileX = Math.floor(coin2.x / tileWidth)
                let tileY = Math.floor(coin2.y / tileWidth)

                // Crear la ubicación del tile truncado
                let tile = tiles.getTileLocation(tileX, tileY)

                if (tiles.tileAtLocationIsWall(tile)) {
                    sprites.destroy(coin2)
                }
            }
        })
}
sprites.onOverlap(SpriteKind.Food, SpriteKind.Coins, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
})
// Los alumnos deben de modificar este codigo
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    music.play(music.stringPlayable("F A - - - - - - ", 1200), music.PlaybackMode.UntilDone)
    sprites.destroy(otherSprite, effects.spray, 1)
    info.changeScoreBy(1)
})
// Los alumnos deben de modificar este codigo
sprites.onOverlap(SpriteKind.Player, SpriteKind.Coins, function (sprite, otherSprite) {
    music.play(music.stringPlayable("- - - A A C5 - - ", 1200), music.PlaybackMode.UntilDone)
    sprites.destroy(otherSprite, effects.spray, 10)
    info.changeScoreBy(1)
})
let coin22: Sprite = null
let posiciones: number[] = []
let fruta: Sprite = null
let objectSize = 0
let spacing = 0
let spriteSize = 0
let horizontalMove = 0
let verticalMove = 0
let Pacman: Sprite = null
let generatedCoins = 0
let sprite: Sprite = null
let tileWidth = 0
let tileWidth2 = 0
info.setScore(0)
info.setLife(3)
Monedas()
crearFruta(1, 1)
crearFruta(1, 15)
crearFruta(15, 1)
crearFruta(15, 15)
Pacman = sprites.create(assets.image`Pacman1`, SpriteKind.Player)
let ghost1 = sprites.create(assets.image`ghost1`, SpriteKind.Enemy)
ghost1.setBounceOnWall(true)
ghost1.setVelocity(20, 20)
let ghost2 = sprites.create(assets.image`ghost0`, SpriteKind.Enemy)
ghost2.setBounceOnWall(true)
ghost2.setVelocity(20, 20)
let ghost3 = sprites.create(assets.image`ghost4`, SpriteKind.Enemy)
ghost3.setBounceOnWall(true)
ghost3.setVelocity(20, 20)
tiles.setCurrentTilemap(tilemap`Nivel3`)
tiles.placeOnTile(Pacman, tiles.getTileLocation(8, 11))
tiles.placeOnTile(ghost1, tiles.getTileLocation(7, 7))
tiles.placeOnTile(ghost2, tiles.getTileLocation(8, 7))
tiles.placeOnTile(ghost3, tiles.getTileLocation(9, 7))
console.log(generatedCoins)
forever(function () {
    PacmanMovement()
})
