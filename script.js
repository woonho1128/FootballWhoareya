// 게임 상태
let targetPlayer = null;
let attempts = 8;
let gameOver = false;
let guessedPlayers = [];
let currentLeague = null;

// DOM 요소
const leagueSelect = document.getElementById('league-select');
const gameScreen = document.getElementById('game-screen');
const currentLeagueName = document.getElementById('current-league-name');
const changeLeagueBtn = document.getElementById('change-league-btn');
const playerInput = document.getElementById('player-input');
const guessBtn = document.getElementById('guess-btn');
const autocompleteList = document.getElementById('autocomplete-list');
const guessesBody = document.getElementById('guesses-body');
const attemptsDisplay = document.getElementById('attempts');
const gameResult = document.getElementById('game-result');
const resultMessage = document.getElementById('result-message');
const playAgainBtn = document.getElementById('play-again-btn');
const leagueButtons = document.querySelectorAll('.league-btn');

// 리그 선택
function selectLeague(league) {
  currentLeague = league;
  players = allPlayers[league];
  currentLeagueName.textContent = league;

  leagueSelect.classList.add('hidden');
  gameScreen.classList.remove('hidden');

  initGame();
}

// 리그 변경
function changeLeague() {
  gameScreen.classList.add('hidden');
  leagueSelect.classList.remove('hidden');
  currentLeague = null;
}

// 게임 초기화
function initGame() {
  targetPlayer = players[Math.floor(Math.random() * players.length)];
  attempts = 8;
  gameOver = false;
  guessedPlayers = [];

  guessesBody.innerHTML = '';
  gameResult.classList.add('hidden');
  playerInput.value = '';
  playerInput.dataset.selectedName = '';
  playerInput.disabled = false;
  guessBtn.disabled = false;
  updateAttemptsDisplay();

  // 첫 번째 랜덤 추측 자동 실행
  makeFirstRandomGuess();
}

// 첫 번째 랜덤 추측
function makeFirstRandomGuess() {
  // 정답이 아닌 랜덤 선수 선택
  let randomPlayer;
  do {
    randomPlayer = players[Math.floor(Math.random() * players.length)];
  } while (randomPlayer.name === targetPlayer.name);

  // 추측 실행
  guessedPlayers.push(randomPlayer.name);
  attempts--;
  updateAttemptsDisplay();

  const results = {
    name: randomPlayer.nameKo,
    nationality: compareAttribute(randomPlayer.nationality, targetPlayer.nationality, 'string'),
    team: compareAttribute(randomPlayer.team, targetPlayer.team, 'string'),
    position: compareAttribute(randomPlayer.position, targetPlayer.position, 'string'),
    birthYear: compareAttribute(randomPlayer.birthYear, targetPlayer.birthYear, 'birthYear'),
    number: compareAttribute(randomPlayer.number, targetPlayer.number, 'number')
  };

  addGuessRow(results);
}

// 남은 기회 표시 업데이트
function updateAttemptsDisplay() {
  attemptsDisplay.innerHTML = `남은 기회: <strong>${attempts}</strong>`;
}

// 자동완성 표시
function showAutocomplete(query) {
  autocompleteList.innerHTML = '';

  if (!query) {
    autocompleteList.classList.remove('show');
    return;
  }

  const queryLower = query.toLowerCase();
  const filtered = players.filter(player =>
    (player.name.toLowerCase().includes(queryLower) ||
     player.nameKo.includes(query)) &&
    !guessedPlayers.includes(player.name)
  ).slice(0, 8);

  if (filtered.length === 0) {
    autocompleteList.classList.remove('show');
    return;
  }

  filtered.forEach((player, index) => {
    const item = document.createElement('div');
    item.className = 'autocomplete-item';
    item.innerHTML = `
      ${player.nameKo} <span style="color:#8892b0">(${player.name})</span>
      <span class="player-team">${player.team}</span>
    `;
    item.addEventListener('click', () => selectPlayer(player));
    autocompleteList.appendChild(item);
  });

  autocompleteList.classList.add('show');
}

// 선수 선택
function selectPlayer(player) {
  playerInput.value = player.nameKo;
  playerInput.dataset.selectedName = player.name;
  autocompleteList.classList.remove('show');
  playerInput.focus();
}

// 속성 비교 및 결과 생성
function compareAttribute(guess, target, type) {
  if (type === 'birthYear') {
    const diff = guess - target;
    if (diff === 0) {
      return { status: 'correct', display: guess };
    } else if (Math.abs(diff) <= 2) {
      const arrow = diff > 0 ? '↓' : '↑';
      return { status: 'close', display: `${guess} ${arrow}` };
    } else {
      const arrow = diff > 0 ? '↓' : '↑';
      return { status: 'wrong', display: `${guess} ${arrow}` };
    }
  } else if (type === 'number') {
    const diff = guess - target;
    if (diff === 0) {
      return { status: 'correct', display: guess };
    } else if (Math.abs(diff) <= 5) {
      const arrow = diff > 0 ? '↓' : '↑';
      return { status: 'close', display: `${guess} ${arrow}` };
    } else {
      const arrow = diff > 0 ? '↓' : '↑';
      return { status: 'wrong', display: `${guess} ${arrow}` };
    }
  } else {
    // 문자열 비교
    if (guess === target) {
      return { status: 'correct', display: guess };
    } else {
      return { status: 'wrong', display: guess };
    }
  }
}

// 추측 처리
function makeGuess() {
  if (gameOver) return;

  const inputValue = playerInput.value.trim();
  const selectedName = playerInput.dataset.selectedName;

  // 선택된 선수가 있으면 그걸 사용, 아니면 입력값으로 검색
  let guessedPlayer;
  if (selectedName) {
    guessedPlayer = players.find(p => p.name === selectedName);
  } else {
    guessedPlayer = players.find(p =>
      p.name.toLowerCase() === inputValue.toLowerCase() ||
      p.nameKo === inputValue
    );
  }

  if (!guessedPlayer) {
    alert('목록에 있는 선수를 선택해주세요!');
    return;
  }

  // 선택 초기화
  playerInput.dataset.selectedName = '';

  if (guessedPlayers.includes(guessedPlayer.name)) {
    alert('이미 추측한 선수입니다!');
    return;
  }

  guessedPlayers.push(guessedPlayer.name);
  attempts--;
  updateAttemptsDisplay();

  // 비교 결과 생성
  const results = {
    name: guessedPlayer.nameKo,
    nationality: compareAttribute(guessedPlayer.nationality, targetPlayer.nationality, 'string'),
    team: compareAttribute(guessedPlayer.team, targetPlayer.team, 'string'),
    position: compareAttribute(guessedPlayer.position, targetPlayer.position, 'string'),
    birthYear: compareAttribute(guessedPlayer.birthYear, targetPlayer.birthYear, 'birthYear'),
    number: compareAttribute(guessedPlayer.number, targetPlayer.number, 'number')
  };

  // 테이블에 행 추가
  addGuessRow(results);

  // 입력 초기화
  playerInput.value = '';
  autocompleteList.classList.remove('show');

  // 정답 체크
  if (guessedPlayer.name === targetPlayer.name) {
    endGame(true);
  } else if (attempts === 0) {
    endGame(false);
  }
}

// 추측 행 추가
function addGuessRow(results) {
  const row = document.createElement('tr');

  row.innerHTML = `
    <td><span class="cell">${results.name}</span></td>
    <td><span class="cell ${results.nationality.status}">${results.nationality.display}</span></td>
    <td><span class="cell ${results.team.status}">${results.team.display}</span></td>
    <td><span class="cell ${results.position.status}">${results.position.display}</span></td>
    <td><span class="cell ${results.birthYear.status}">${results.birthYear.display}</span></td>
    <td><span class="cell ${results.number.status}">${results.number.display}</span></td>
  `;

  // 맨 위에 추가 (최신 추측이 위에)
  guessesBody.insertBefore(row, guessesBody.firstChild);
}

// 게임 종료
function endGame(won) {
  gameOver = true;
  playerInput.disabled = true;
  guessBtn.disabled = true;

  if (won) {
    resultMessage.className = 'win';
    resultMessage.innerHTML = `
      🎉 정답입니다!<br>
      <span class="answer">${targetPlayer.nameKo}</span>를 맞추셨습니다!<br>
      ${8 - attempts}번 만에 성공!
    `;
  } else {
    resultMessage.className = 'lose';
    resultMessage.innerHTML = `
      😢 아쉽습니다!<br>
      정답은 <span class="answer">${targetPlayer.nameKo}</span>입니다.<br>
      (${targetPlayer.team})
    `;
  }

  gameResult.classList.remove('hidden');
}

// 이벤트 리스너
leagueButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    selectLeague(btn.dataset.league);
  });
});

changeLeagueBtn.addEventListener('click', changeLeague);

playerInput.addEventListener('input', (e) => {
  showAutocomplete(e.target.value);
});

playerInput.addEventListener('keydown', (e) => {
  const items = autocompleteList.querySelectorAll('.autocomplete-item');
  const activeItem = autocompleteList.querySelector('.autocomplete-item.active');

  if (e.key === 'ArrowDown') {
    e.preventDefault();
    if (!activeItem && items.length > 0) {
      items[0].classList.add('active');
    } else if (activeItem && activeItem.nextElementSibling) {
      activeItem.classList.remove('active');
      activeItem.nextElementSibling.classList.add('active');
    }
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    if (activeItem && activeItem.previousElementSibling) {
      activeItem.classList.remove('active');
      activeItem.previousElementSibling.classList.add('active');
    }
  } else if (e.key === 'Enter') {
    e.preventDefault();
    if (activeItem) {
      const nameKo = activeItem.textContent.split('(')[0].trim();
      const player = players.find(p => p.nameKo === nameKo);
      if (player) {
        selectPlayer(player);
      }
    }
    makeGuess();
  } else if (e.key === 'Escape') {
    autocompleteList.classList.remove('show');
  }
});

guessBtn.addEventListener('click', makeGuess);

playAgainBtn.addEventListener('click', initGame);

// 외부 클릭 시 자동완성 닫기
document.addEventListener('click', (e) => {
  if (!e.target.closest('.input-container')) {
    autocompleteList.classList.remove('show');
  }
});
