namespace SpriteKind {
    export const Coins = SpriteKind.create()
}
/**
 * Instanciar aleatoriamente
 */
/**
 * Para los fantasmas,
 * 
 * que se muevan aleatoriamente
 */
// Cuando Pacman entra en colicion con el fantasma
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
	
})
// Cuando Pacman entra en colicion con la moneda
sprites.onOverlap(SpriteKind.Player, SpriteKind.Coins, function (sprite, otherSprite) {
	
})
let horizontalMove = 0
let verticalMove = 0
let Pacman = sprites.create(assets.image`Pacman1`, SpriteKind.Player)
let ghost1 = sprites.create(assets.image`ghost1`, SpriteKind.Enemy)
let ghost2 = sprites.create(assets.image`ghost2`, SpriteKind.Enemy)
let ghost3 = sprites.create(assets.image`ghost3`, SpriteKind.Enemy)
tiles.setCurrentTilemap(tilemap`Nivel3`)
tiles.placeOnTile(Pacman, tiles.getTileLocation(1, 1))
tiles.placeOnTile(ghost1, tiles.getTileLocation(7, 7))
tiles.placeOnTile(ghost2, tiles.getTileLocation(8, 7))
tiles.placeOnTile(ghost3, tiles.getTileLocation(9, 7))
forever(function () {
    scene.cameraFollowSprite(Pacman)
    if (controller.up.isPressed()) {
        verticalMove = -1
    }
    if (controller.down.isPressed()) {
        verticalMove = 1
    }
    if (controller.right.isPressed()) {
        horizontalMove = 1
    }
    if (controller.left.isPressed()) {
        horizontalMove = -1
    }
    Pacman.x += horizontalMove
    Pacman.y += verticalMove
})
