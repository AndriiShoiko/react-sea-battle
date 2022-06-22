
class Ship {
    constructor(countPart) {
        this.countPart = countPart;
        this.countShotPart = 0;
        this.isSunk = false;
    }
}

export class GameBlock {
    constructor(ship, isHeader = false, caption = '') {
        this.ship = ship;
        this.isHeader = isHeader;
        this.isShot = false;
        this.caption = caption;
    }

    static processShot(gameBlock, gameState) {

        if (gameBlock.isShot || gameBlock.isHeader) {
            return;
        } else {
            gameBlock.isShot = true;
            if (gameBlock.ship !== null) {

                const ship = gameBlock.ship;
                ship.countShotPart += 1;
                if (ship.countPart === ship.countShotPart) {
                    ship.isSunk = true;
                }

                gameState.whoseMove.countShots++;
            } else {
                if (gameState.whoseMove === gameState.Player1) {
                    gameState.whoseMove = gameState.Player2;
                } else {
                    gameState.whoseMove = gameState.Player1;
                }
            }
            if(gameState.Player1.isWin() || gameState.Player2.isWin()){
                gameState.endGame = true;
            }
        }
    }
}

class GamePlayer {
    constructor(name) {
        this.name = name;

        this.mShip4 = [new Ship(4)];
        this.mShip3 = [new Ship(3), new Ship(3)];
        this.mShip2 = [new Ship(2), new Ship(2), new Ship(2)];
        this.mShip1 = [new Ship(1), new Ship(1), new Ship(1), new Ship(1)];

        this.mArea = [];

        this.countShipBlock = 20;
        this.countShots = 0;
    }

    isHeader(str) {
        if (str.length > 0 && str.length < 3) {
            return true;
        }
        return false;
    }

    isVoidBlock(str) {
        if (str.length === 0) {
            return true;
        }
        return false;
    }

    isWin() {
        return this.countShots === this.countShipBlock;
    }

    setArea(mAreaScheme) {
        this.mArea = mAreaScheme.map((e) => {
            return e.map((ee) => {
                if (this.isHeader(ee)) {
                    return new GameBlock(null, true, ee === 'X' ? '' : ee);
                } else {
                    if (this.isVoidBlock(ee)) {
                        return new GameBlock(null, false);
                    } else {
                        return new GameBlock(this[`mShip${ee[0]}`][ee[2] - 1]);
                    }
                }
            });
        });
    }
}

class Game {

    constructor(Player1, Player2) {
        this.Player1 = Player1;
        this.Player2 = Player2;
        this.whoseMove = this.Player1;
        this.endGame = false;
    }

}

function getPlayerObject(name) {

    let mAreaScheme = [
        ['X', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
        ['1', '2.1', '2.1', '', '3.1', '', '', '4.1', '4.1', '4.1', '4.1'],
        ['2', '', '', '', '3.1', '', '', '', '', '', ''],
        ['3', '', '', '', '3.1', '', '', '', '', '', '2.2'],
        ['4', '', '3.2', '', '', '', '', '', '', '', '2.2'],
        ['5', '', '3.2', '', '', '', '', '1.1.1', '', '', ''],
        ['6', '', '3.2', '', '', '', '', '', '', '', ''],
        ['7', '', '', '', '', '', '', '', '', '', ''],
        ['8', '', '', '', '1.3', '', '1.2', '', '', '2.3', ''],
        ['9', '1.4', '', '', '', '', '', '', '', '2.3', ''],
        ['10', '', '', '', '', '', '', '', '', '', '']
    ];

    let Player = new GamePlayer(name);
    Player.setArea(mAreaScheme);

    return Player;

}

export function getGameObj() {
    return new Game(getPlayerObject("Player 1"), getPlayerObject("Player 2"));
}