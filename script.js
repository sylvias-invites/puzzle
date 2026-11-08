const bgPositions = [
    '0px 0px',         
    '-140px 0px',      
    '0px -140px',      
    '-140px -140px'    
];

const pieces = Array.from(document.querySelectorAll('.puzzle-piece'));
const board = document.getElementById('board');
let selectedPiece = null;

function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}

function isOneSwapAway(arr) {
    let mismatched = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== i) mismatched.push(i);
    }
    if (mismatched.length === 2) {
        let [a, b] = mismatched;
        if (arr[a] === b && arr[b] === a) return true;
    }
    return false;
}

function initPuzzle() {
    pieces.forEach(piece => {
        const correctIdx = parseInt(piece.dataset.correct);
        piece.style.backgroundPosition = bgPositions[correctIdx];
    });

    let currentOrder = [0, 1, 2, 3];
    do {
        shuffle(currentOrder);
    } while (
        currentOrder.every((val, index) => val === index) || 
        isOneSwapAway(currentOrder)
    );

    currentOrder.forEach(idx => {
        board.appendChild(pieces[idx]);
    });
}

pieces.forEach(piece => {
    piece.addEventListener('click', () => {
        if (!selectedPiece) {
            selectedPiece = piece;
            piece.classList.add('selected');
        } else if (selectedPiece === piece) {
            piece.classList.remove('selected');
            selectedPiece = null;
        } else {
            const nextOfFirst = selectedPiece.nextSibling === piece ? selectedPiece : selectedPiece.nextSibling;
            board.insertBefore(selectedPiece, piece);
            board.insertBefore(piece, nextOfFirst);

            selectedPiece.classList.remove('selected');
            selectedPiece = null;

            checkWin();
        }
    });
});

function checkWin() {
    const currentPieces = Array.from(board.children);
    const isSolved = currentPieces.every((piece, index) => {
        return parseInt(piece.dataset.correct) === index;
    });

    if (isSolved) {
        board.style.gap = '0px';
        currentPieces.forEach(p => {
            p.style.border = 'none';
            p.style.borderRadius = '0';
            p.style.cursor = 'default';
        });

        const subtitle = document.getElementById('subtitle-text');
        subtitle.style.opacity = 0;
        setTimeout(() => {
            subtitle.textContent = "Srdečně vás zveme na naši svatbu!";
            subtitle.classList.add('solved');
            subtitle.style.opacity = 1;
        }, 300);

        launchConfetti();

        setTimeout(() => {
            document.getElementById('btn-more').classList.add('visible');
        }, 2500);
    }
}

function launchConfetti() {
    const eucalyptusColors = ['#5c7462', '#8ab092', '#c3d5c5', '#ffffff', '#d1d5d1', '#9fa8a0'];
    confetti({ particleCount: 60, spread: 70, origin: { y: 0.6 }, colors: eucalyptusColors, shapes: ['square'] });
    setTimeout(() => {
        confetti({ particleCount: 40, angle: 60, spread: 55, origin: { x: 0 }, colors: eucalyptusColors, shapes: ['square'] });
        confetti({ particleCount: 40, angle: 120, spread: 55, origin: { x: 1 }, colors: eucalyptusColors, shapes: ['square'] });
    }, 400);
    setTimeout(() => {
        confetti({ particleCount: 50, spread: 100, origin: { y: 0.3 }, colors: eucalyptusColors, shapes: ['square'] });
    }, 1200);
}

initPuzzle();

function goToDetails() {
    const puzzlePage = document.getElementById('page-puzzle');
    const detailsPage = document.getElementById('page-details');

    puzzlePage.style.opacity = 0;
    setTimeout(() => {
        puzzlePage.classList.add('hidden');
        detailsPage.classList.remove('hidden');
        detailsPage.style.opacity = 1;
        window.scrollTo(0, 0);
    }, 500);
}

const weddingDate = new Date("Sep 17, 2027 11:00:00").getTime();

const countdownTimer = setInterval(function() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    if (distance < 0) {
        clearInterval(countdownTimer);
        document.getElementById("days").textContent = "0";
        document.getElementById("hours").textContent = "0";
        document.getElementById("minutes").textContent = "0";
        document.getElementById("seconds").textContent = "0";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
}, 1000);

function handleRSVP(event) {
    event.preventDefault();
    document.getElementById('rsvpForm').style.display = 'none';
    document.getElementById('rsvpSuccess').style.display = 'block';
}
