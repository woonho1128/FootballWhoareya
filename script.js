// 게임 상태
let targetPlayer = null;
let attempts = 8;
let gameOver = false;
let guessedPlayers = [];
let currentLeague = null;
let currentMode = null; // 'football' or 'lol'
let currentData = null; // 현재 사용 중인 데이터 (players 또는 champions)

// DOM 요소
const modeSelect = document.getElementById('mode-select');
const leagueSelect = document.getElementById('league-select');
const gameScreen = document.getElementById('game-screen');
const currentLeagueName = document.getElementById('current-league-name');
const changeLeagueBtn = document.getElementById('change-league-btn');
const playerInput = document.getElementById('player-input');
const guessBtn = document.getElementById('guess-btn');
const autocompleteList = document.getElementById('autocomplete-list');
const guessesBody = document.getElementById('guesses-body');
const lolGuessesBody = document.getElementById('lol-guesses-body');
const attemptsDisplay = document.getElementById('attempts');
const gameResult = document.getElementById('game-result');
const resultMessage = document.getElementById('result-message');
const playAgainBtn = document.getElementById('play-again-btn');
const leagueButtons = document.querySelectorAll('.league-btn');
const modeButtons = document.querySelectorAll('.mode-btn');
const backToModeBtn = document.getElementById('back-to-mode-btn');
const footballTable = document.getElementById('guesses-table');
const lolTable = document.getElementById('lol-guesses-table');
const mainTitle = document.getElementById('main-title');
const mainSubtitle = document.getElementById('main-subtitle');

// 게임 모드 선택
function selectMode(mode) {
  currentMode = mode;
  modeSelect.classList.add('hidden');

  if (mode === 'football') {
    mainTitle.textContent = '⚽ Who Are Ya?';
    mainSubtitle.textContent = '축구 선수를 맞춰보세요!';
    leagueSelect.classList.remove('hidden');
  } else if (mode === 'lol') {
    mainTitle.textContent = '🎮 Who Are Ya?';
    mainSubtitle.textContent = '롤 챔피언을 맞춰보세요!';
    currentData = champions;
    currentLeagueName.textContent = '롤 챔피언';
    gameScreen.classList.remove('hidden');
    footballTable.classList.add('hidden');
    lolTable.classList.remove('hidden');
    initGame();
  }
}

// 모드 선택 화면으로 돌아가기
function backToMode() {
  leagueSelect.classList.add('hidden');
  gameScreen.classList.add('hidden');
  modeSelect.classList.remove('hidden');
  currentMode = null;
  currentLeague = null;
  mainTitle.textContent = '⚽ Who Are Ya?';
  mainSubtitle.textContent = '축구 선수를 맞춰보세요!';
}

// 리그 선택 (축구)
function selectLeague(league) {
  currentLeague = league;
  currentData = allPlayers[league];
  currentLeagueName.textContent = league;

  leagueSelect.classList.add('hidden');
  gameScreen.classList.remove('hidden');
  footballTable.classList.remove('hidden');
  lolTable.classList.add('hidden');

  initGame();
}

// 리그/모드 변경
function changeLeague() {
  gameScreen.classList.add('hidden');

  if (currentMode === 'football') {
    leagueSelect.classList.remove('hidden');
  } else {
    modeSelect.classList.remove('hidden');
    currentMode = null;
    mainTitle.textContent = '⚽ Who Are Ya?';
    mainSubtitle.textContent = '축구 선수를 맞춰보세요!';
  }
  currentLeague = null;
}

// 게임 초기화
function initGame() {
  targetPlayer = currentData[Math.floor(Math.random() * currentData.length)];
  attempts = currentMode === 'lol' ? 5 : 8;
  gameOver = false;
  guessedPlayers = [];

  if (currentMode === 'football') {
    guessesBody.innerHTML = '';
  } else {
    lolGuessesBody.innerHTML = '';
  }

  gameResult.classList.add('hidden');
  playerInput.value = '';
  playerInput.dataset.selectedName = '';
  playerInput.disabled = false;
  guessBtn.disabled = false;

  // placeholder 변경
  if (currentMode === 'lol') {
    playerInput.placeholder = '챔피언 이름을 입력하세요...';
  } else {
    playerInput.placeholder = '선수 이름을 입력하세요...';
  }

  updateAttemptsDisplay();

  // 첫 번째 랜덤 추측 자동 실행
  makeFirstRandomGuess();
}

// 첫 번째 랜덤 추측
function makeFirstRandomGuess() {
  // 정답이 아닌 랜덤 선택
  let randomItem;
  do {
    randomItem = currentData[Math.floor(Math.random() * currentData.length)];
  } while (randomItem.name === targetPlayer.name);

  // 추측 실행
  guessedPlayers.push(randomItem.name);
  attempts--;
  updateAttemptsDisplay();

  if (currentMode === 'football') {
    const results = {
      name: randomItem.nameKo,
      nationality: compareAttribute(randomItem.nationality, targetPlayer.nationality, 'string'),
      team: compareAttribute(randomItem.team, targetPlayer.team, 'string'),
      position: compareAttribute(randomItem.position, targetPlayer.position, 'string'),
      birthYear: compareAttribute(randomItem.birthYear, targetPlayer.birthYear, 'birthYear'),
      number: compareAttribute(randomItem.number, targetPlayer.number, 'number')
    };
    addGuessRow(results);
  } else {
    const results = {
      name: randomItem.nameKo,
      region: compareAttribute(randomItem.region, targetPlayer.region, 'string'),
      role: compareAttribute(randomItem.role, targetPlayer.role, 'string'),
      range: compareAttribute(randomItem.range, targetPlayer.range, 'string'),
      resource: compareAttribute(randomItem.resource, targetPlayer.resource, 'string'),
      releaseYear: compareAttribute(randomItem.releaseYear, targetPlayer.releaseYear, 'releaseYear')
    };
    addLolGuessRow(results);
  }
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
  const filtered = currentData.filter(item =>
    (item.name.toLowerCase().includes(queryLower) ||
     item.nameKo.includes(query)) &&
    !guessedPlayers.includes(item.name)
  ).slice(0, 8);

  if (filtered.length === 0) {
    autocompleteList.classList.remove('show');
    return;
  }

  filtered.forEach((item, index) => {
    const div = document.createElement('div');
    div.className = 'autocomplete-item';

    if (currentMode === 'football') {
      div.innerHTML = `
        ${item.nameKo} <span style="color:#8892b0">(${item.name})</span>
        <span class="player-team">${item.team}</span>
      `;
    } else {
      div.innerHTML = `
        ${item.nameKo} <span style="color:#8892b0">(${item.name})</span>
        <span class="player-team">${item.role}</span>
      `;
    }
    div.addEventListener('click', () => selectPlayer(item));
    autocompleteList.appendChild(div);
  });

  autocompleteList.classList.add('show');
}

// 선수/챔피언 선택
function selectPlayer(item) {
  playerInput.value = item.nameKo;
  playerInput.dataset.selectedName = item.name;
  autocompleteList.classList.remove('show');
  playerInput.focus();
}

// 속성 비교 및 결과 생성
function compareAttribute(guess, target, type) {
  if (type === 'birthYear' || type === 'releaseYear') {
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

  // 선택된 항목이 있으면 그걸 사용, 아니면 입력값으로 검색
  let guessedItem;
  if (selectedName) {
    guessedItem = currentData.find(p => p.name === selectedName);
  } else {
    guessedItem = currentData.find(p =>
      p.name.toLowerCase() === inputValue.toLowerCase() ||
      p.nameKo === inputValue
    );
  }

  if (!guessedItem) {
    if (currentMode === 'lol') {
      alert('목록에 있는 챔피언을 선택해주세요!');
    } else {
      alert('목록에 있는 선수를 선택해주세요!');
    }
    return;
  }

  // 선택 초기화
  playerInput.dataset.selectedName = '';

  if (guessedPlayers.includes(guessedItem.name)) {
    alert('이미 추측한 항목입니다!');
    return;
  }

  guessedPlayers.push(guessedItem.name);
  attempts--;
  updateAttemptsDisplay();

  // 비교 결과 생성
  if (currentMode === 'football') {
    const results = {
      name: guessedItem.nameKo,
      nationality: compareAttribute(guessedItem.nationality, targetPlayer.nationality, 'string'),
      team: compareAttribute(guessedItem.team, targetPlayer.team, 'string'),
      position: compareAttribute(guessedItem.position, targetPlayer.position, 'string'),
      birthYear: compareAttribute(guessedItem.birthYear, targetPlayer.birthYear, 'birthYear'),
      number: compareAttribute(guessedItem.number, targetPlayer.number, 'number')
    };
    addGuessRow(results);
  } else {
    const results = {
      name: guessedItem.nameKo,
      region: compareAttribute(guessedItem.region, targetPlayer.region, 'string'),
      role: compareAttribute(guessedItem.role, targetPlayer.role, 'string'),
      range: compareAttribute(guessedItem.range, targetPlayer.range, 'string'),
      resource: compareAttribute(guessedItem.resource, targetPlayer.resource, 'string'),
      releaseYear: compareAttribute(guessedItem.releaseYear, targetPlayer.releaseYear, 'releaseYear')
    };
    addLolGuessRow(results);
  }

  // 입력 초기화
  playerInput.value = '';
  autocompleteList.classList.remove('show');

  // 정답 체크
  if (guessedItem.name === targetPlayer.name) {
    endGame(true);
  } else if (attempts === 0) {
    endGame(false);
  }
}

// 축구 추측 행 추가
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

// 롤 추측 행 추가
function addLolGuessRow(results) {
  const row = document.createElement('tr');

  row.innerHTML = `
    <td><span class="cell">${results.name}</span></td>
    <td><span class="cell ${results.region.status}">${results.region.display}</span></td>
    <td><span class="cell ${results.role.status}">${results.role.display}</span></td>
    <td><span class="cell ${results.range.status}">${results.range.display}</span></td>
    <td><span class="cell ${results.resource.status}">${results.resource.display}</span></td>
    <td><span class="cell ${results.releaseYear.status}">${results.releaseYear.display}</span></td>
  `;

  // 맨 위에 추가 (최신 추측이 위에)
  lolGuessesBody.insertBefore(row, lolGuessesBody.firstChild);
}

// 게임 종료
function endGame(won) {
  gameOver = true;
  playerInput.disabled = true;
  guessBtn.disabled = true;

  const itemType = currentMode === 'lol' ? '챔피언' : '선수';
  const extraInfo = currentMode === 'lol' ? targetPlayer.role : targetPlayer.team;

  const maxAttempts = currentMode === 'lol' ? 5 : 8;

  if (won) {
    resultMessage.className = 'win';
    resultMessage.innerHTML = `
      🎉 정답입니다!<br>
      <span class="answer">${targetPlayer.nameKo}</span>를 맞추셨습니다!<br>
      ${maxAttempts - attempts}번 만에 성공!
    `;
  } else {
    resultMessage.className = 'lose';
    resultMessage.innerHTML = `
      😢 아쉽습니다!<br>
      정답은 <span class="answer">${targetPlayer.nameKo}</span>입니다.<br>
      (${extraInfo})
    `;
  }

  gameResult.classList.remove('hidden');
}

// 이벤트 리스너
modeButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    selectMode(btn.dataset.mode);
  });
});

leagueButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    selectLeague(btn.dataset.league);
  });
});

backToModeBtn.addEventListener('click', backToMode);

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
      const item = currentData.find(p => p.nameKo === nameKo);
      if (item) {
        selectPlayer(item);
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
