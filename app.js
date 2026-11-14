const lessons = [
  {
    id: "force",
    title: "힘과 가속도",
    subtitle: "뉴턴의 운동 법칙",
    intro: "같은 힘으로 밀어도 물체의 질량이 달라지면 운동의 변화는 달라질까요?",
    question: "같은 크기의 힘을 가할 때, 질량이 더 큰 물체의 가속도는 어떻게 될까요?",
    predictions: ["더 커진다", "더 작아진다", "같다"],
    correctPrediction: 1,
    predictionFeedback: "질량이 클수록 같은 힘에 의한 가속도는 작아져요. 이제 힘과 질량을 바꾸며 관계를 확인해 봅시다.",
    controls: [
      { key: "a", label: "알짜힘 F", unit: "N", min: 1, max: 10, step: 1, value: 4 },
      { key: "b", label: "질량 m", unit: "kg", min: 0.5, max: 5, step: 0.5, value: 2 }
    ],
    calculate: (a, b) => ({ value: a / b, unit: "m/s²", equation: `a = ${a} N ÷ ${b} kg` }),
    resultLabel: "계산된 가속도",
    concept: "물체의 가속도는 알짜힘에 비례하고 질량에 반비례해요. 힘의 방향으로 속도가 변하며, 알짜힘이 0이면 속도는 변하지 않습니다.",
    equation: "ΣF = ma",
    quiz: "알짜힘이 같은 물체에서 질량을 2배로 늘리면 가속도는 어떻게 될까요?",
    options: ["2배가 된다", "절반이 된다", "변하지 않는다"],
    answer: 1,
    explanation: "a = F/m 이므로 힘이 일정할 때 질량이 2배가 되면 가속도는 절반이 됩니다."
  },
  {
    id: "energy",
    title: "일과 에너지",
    subtitle: "일-에너지 정리",
    intro: "물체에 한 일이 물체의 운동 상태와 어떤 관계를 맺는지 살펴봐요.",
    question: "같은 방향으로 같은 힘을 가할 때, 더 먼 거리만큼 물체를 움직이면 한 일은 어떻게 될까요?",
    predictions: ["커진다", "작아진다", "같다"],
    correctPrediction: 0,
    predictionFeedback: "힘의 방향으로 이동한 거리가 길수록 한 일은 커져요. 힘과 이동 거리를 바꿔 확인해 봅시다.",
    controls: [
      { key: "a", label: "힘 F", unit: "N", min: 1, max: 10, step: 1, value: 5 },
      { key: "b", label: "이동 거리 d", unit: "m", min: 1, max: 10, step: 1, value: 3 }
    ],
    calculate: (a, b) => ({ value: a * b, unit: "J", equation: `W = ${a} N × ${b} m` }),
    resultLabel: "물체에 한 일",
    concept: "일은 힘의 방향으로 물체가 이동한 거리와 힘의 곱이에요. 알짜힘이 한 일은 운동 에너지의 변화와 같아요. (마찰이 없고 힘과 이동 방향이 같다고 가정합니다.)",
    equation: "W = Fd = ΔK",
    quiz: "일정한 힘이 이동 방향과 같은 방향으로 작용할 때, 이동 거리가 2배가 되면 한 일은?",
    options: ["2배가 된다", "절반이 된다", "변하지 않는다"],
    answer: 0,
    explanation: "W = Fd 이므로 힘이 일정하면 이동 거리가 2배일 때 한 일도 2배입니다."
  },
  {
    id: "momentum",
    title: "충격량과 운동량",
    subtitle: "운동량 변화",
    intro: "힘이 작용한 시간은 물체의 운동량 변화와 어떻게 연결될까요?",
    question: "같은 크기의 힘이 더 오랜 시간 작용하면 충격량은 어떻게 될까요?",
    predictions: ["커진다", "작아진다", "같다"],
    correctPrediction: 0,
    predictionFeedback: "힘이 작용한 시간이 길수록 충격량은 커져요. 힘과 시간을 바꿔 확인해 봅시다.",
    controls: [
      { key: "a", label: "힘 F", unit: "N", min: 1, max: 10, step: 1, value: 4 },
      { key: "b", label: "작용 시간 Δt", unit: "s", min: 0.1, max: 2, step: 0.1, value: 0.5 }
    ],
    calculate: (a, b) => ({ value: a * b, unit: "N·s", equation: `J = ${a} N × ${b} s` }),
    resultLabel: "충격량 (운동량 변화)",
    concept: "충격량은 힘과 힘이 작용한 시간의 곱이며, 운동량 변화와 같아요. 같은 운동량 변화라도 작용 시간을 늘리면 평균 힘을 줄일 수 있어요.",
    equation: "J = FΔt = Δp",
    quiz: "운동량 변화가 같을 때 충돌 시간을 늘리면 평균 힘은 어떻게 될까요?",
    options: ["커진다", "작아진다", "변하지 않는다"],
    answer: 1,
    explanation: "Δp = FΔt 이므로 운동량 변화가 같다면 충돌 시간이 길수록 평균 힘은 작아집니다."
  },
  {
    id: "circular",
    title: "원운동",
    subtitle: "구심 가속도",
    intro: "속력의 크기가 일정해도 방향이 바뀌면 가속도가 있을까요?",
    question: "같은 반지름의 원을 도는 물체의 속력이 커지면 구심 가속도는 어떻게 될까요?",
    predictions: ["커진다", "작아진다", "없어진다"],
    correctPrediction: 0,
    predictionFeedback: "속력이 클수록 원의 중심을 향하는 가속도가 커져요. 속력과 반지름의 변화를 확인해 봅시다.",
    controls: [
      { key: "a", label: "속력 v", unit: "m/s", min: 1, max: 10, step: 1, value: 4 },
      { key: "b", label: "반지름 r", unit: "m", min: 0.5, max: 10, step: 0.5, value: 2 }
    ],
    calculate: (a, b) => ({ value: a * a / b, unit: "m/s²", equation: `a = ${a}² m²/s² ÷ ${b} m` }),
    resultLabel: "구심 가속도 크기",
    concept: "원운동에서는 속력의 크기가 일정해도 속도의 방향이 계속 변하므로 가속도가 있어요. 구심 가속도의 방향은 원의 중심 쪽입니다.",
    equation: "aᶜ = v²/r",
    quiz: "같은 반지름에서 속력을 2배로 하면 구심 가속도는 몇 배가 될까요?",
    options: ["2배", "4배", "절반"],
    answer: 1,
    explanation: "aᶜ = v²/r 이므로 속력이 2배가 되면 구심 가속도는 2², 즉 4배가 됩니다."
  }
];

const storageKey = "concept-lab-progress-v1";
const defaultState = { xp: 0, completed: [] };
let savedState = loadState();
let activeLesson = 0;
let selectedPrediction = null;
let predictionSubmitted = false;
let quizAnswered = false;

function loadState() {
  try {
    const stored = JSON.parse(localStorage.getItem(storageKey));
    if (stored && Array.isArray(stored.completed) && Number.isFinite(stored.xp)) return stored;
  } catch (error) {
    console.warn("학습 기록을 불러오지 못했습니다.", error);
  }
  return { ...defaultState };
}

function persistState() {
  try {
    localStorage.setItem(storageKey, JSON.stringify(savedState));
  } catch (error) {
    console.warn("학습 기록을 저장하지 못했습니다.", error);
  }
}

function updateProgress() {
  const completed = lessons.filter((lesson) => savedState.completed.includes(lesson.id)).length;
  document.getElementById("xp-total").textContent = savedState.xp;
  document.getElementById("completion-count").textContent = completed;
  document.getElementById("lesson-count").textContent = `${completed} / ${lessons.length}`;
  document.getElementById("progress-label").textContent = completed === lessons.length
    ? "모든 개념을 탐구했어요!"
    : completed === 0 ? "첫 번째 개념을 시작해 보세요" : `${completed}개 개념을 탐구했어요`;
  document.getElementById("progress-fill").style.width = `${completed / lessons.length * 100}%`;
  document.querySelectorAll(".lesson-link").forEach((button, index) => {
    button.classList.toggle("done", savedState.completed.includes(lessons[index].id));
  });
}

function renderNavigation() {
  const nav = document.getElementById("lesson-nav");
  nav.innerHTML = lessons.map((lesson, index) => `
    <button class="lesson-link ${index === activeLesson ? "active" : ""} ${savedState.completed.includes(lesson.id) ? "done" : ""}"
      type="button" data-lesson="${index}" aria-current="${index === activeLesson ? "step" : "false"}">
      <span class="lesson-number">${savedState.completed.includes(lesson.id) ? "✓" : String(index + 1).padStart(2, "0")}</span>
      <span class="lesson-name">${lesson.title}<small>${lesson.subtitle}</small></span>
    </button>
  `).join("");
  nav.querySelectorAll("[data-lesson]").forEach((button) => {
    button.addEventListener("click", () => {
      activeLesson = Number(button.dataset.lesson);
      resetInteraction();
      render();
    });
  });
}

function renderLesson() {
  const lesson = lessons[activeLesson];
  const content = document.getElementById("lesson-content");
  const choiceButtons = lesson.predictions.map((choice, index) => `
    <button class="choice-button" type="button" data-prediction="${index}">${choice}</button>
  `).join("");
  const controls = lesson.controls.map((control) => `
    <label class="control">
      <span class="control-label"><span>${control.label}</span><output id="output-${control.key}"></output></span>
      <input type="range" id="input-${control.key}" min="${control.min}" max="${control.max}" step="${control.step}" value="${control.value}">
    </label>
  `).join("");
  const options = lesson.options.map((option, index) => `
    <button class="quiz-option" type="button" data-answer="${index}">
      <span class="option-letter">${String.fromCharCode(65 + index)}</span><span>${option}</span>
    </button>
  `).join("");
  const alreadyCompleted = savedState.completed.includes(lesson.id);

  content.innerHTML = `
    <article class="lesson-card">
      <header class="lesson-top">
        <div class="lesson-meta"><span class="lesson-kicker">CONCEPT ${String(activeLesson + 1).padStart(2, "0")} / 04</span><span class="time-label">탐구 · 실험 · 확인</span></div>
        <h2>${lesson.title}</h2>
        <p class="lesson-intro">${lesson.intro}</p>
      </header>
      <div class="lesson-body">
        <div class="step-label"><span>1</span> 먼저 예상해요</div>
        <div class="question-box">
          <p>${lesson.question}<span class="question-hint">직관에 따라 하나를 골라 보세요. 틀려도 괜찮아요.</span></p>
          <div class="choice-row">${choiceButtons}</div>
          <div id="prediction-feedback" class="feedback" role="status"></div>
        </div>

        <section class="experiment" aria-label="개념 탐구 실험">
          <div class="experiment-heading"><strong><span class="step-label"><span>2</span> 변수를 바꾸며 확인해요</span></strong><span>슬라이더를 움직여 보세요</span></div>
          <div class="experiment-grid">
            <div>${controls}</div>
            <div>
              <div class="experiment-visual" aria-hidden="true">
                <span class="visual-caption">SIMULATION</span><span class="object" id="moving-object">●</span><span class="track-line"></span>
              </div>
              <div class="result-box"><div class="result-label">${lesson.resultLabel}</div><div class="result-value" id="result-value"></div><div class="result-equation" id="result-equation"></div></div>
            </div>
          </div>
        </section>

        <section class="concept-box">
          <p class="concept-title"><span class="step-label"><span>3</span> 개념으로 연결해요</span></p>
          <p class="concept-copy">${lesson.concept}</p><div class="equation">${lesson.equation}</div>
        </section>

        <section class="quiz-section">
          <div class="step-label"><span>4</span> 내 것으로 만들어요</div>
          <p class="quiz-prompt">${lesson.quiz}</p>
          <div class="quiz-choices">${options}</div>
          <p id="quiz-feedback" class="quiz-feedback" role="status">${alreadyCompleted ? "이 개념을 완료했어요. 다시 풀어도 추가 XP는 지급되지 않아요." : ""}</p>
          <button id="complete-button" class="primary-button" type="button" disabled>${alreadyCompleted ? "개념 완료 ✓" : "정답을 선택해 주세요"}</button>
        </section>
      </div>
    </article>
  `;
  content.querySelectorAll("[data-prediction]").forEach((button) => {
    button.addEventListener("click", () => selectPrediction(button));
  });
  content.querySelectorAll(".experiment input").forEach((input) => input.addEventListener("input", updateExperiment));
  content.querySelectorAll("[data-answer]").forEach((button) => {
    button.addEventListener("click", () => answerQuiz(button));
  });
  updateExperiment();
}

function selectPrediction(button) {
  if (predictionSubmitted) return;
  selectedPrediction = Number(button.dataset.prediction);
  document.querySelectorAll("[data-prediction]").forEach((choice) => choice.classList.toggle("selected", choice === button));
  predictionSubmitted = true;
  const feedback = document.getElementById("prediction-feedback");
  const lesson = lessons[activeLesson];
  feedback.textContent = `${selectedPrediction === lesson.correctPrediction ? "좋은 예측이에요! " : "예측과 다르지만 괜찮아요. "} ${lesson.predictionFeedback}`;
  feedback.classList.add("visible");
}

function updateExperiment() {
  const lesson = lessons[activeLesson];
  const values = {};
  lesson.controls.forEach((control) => {
    const input = document.getElementById(`input-${control.key}`);
    const value = Number(input.value);
    values[control.key] = value;
    document.getElementById(`output-${control.key}`).textContent = `${value} ${control.unit}`;
  });
  const result = lesson.calculate(values.a, values.b);
  document.getElementById("result-value").textContent = `${Number(result.value.toFixed(2))} ${result.unit}`;
  document.getElementById("result-equation").textContent = result.equation;
  const intensity = Math.min(1, Math.max(0, result.value / 30));
  const position = 12 + intensity * 65;
  const object = document.getElementById("moving-object");
  object.style.left = `${position}%`;
  object.style.transform = `rotate(${intensity * 8}deg)`;
}

function answerQuiz(button) {
  if (quizAnswered) return;
  quizAnswered = true;
  const lesson = lessons[activeLesson];
  const answer = Number(button.dataset.answer);
  document.querySelectorAll("[data-answer]").forEach((option) => {
    option.disabled = true;
    if (Number(option.dataset.answer) === lesson.answer) option.classList.add("correct");
  });
  const feedback = document.getElementById("quiz-feedback");
  const completeButton = document.getElementById("complete-button");
  if (answer === lesson.answer) {
    feedback.textContent = lesson.explanation;
    feedback.classList.add("success");
    completeButton.disabled = false;
    completeButton.textContent = savedState.completed.includes(lesson.id) ? "개념 완료 ✓" : "개념 완료하고 20 XP 받기";
    if (!savedState.completed.includes(lesson.id)) completeButton.addEventListener("click", completeLesson, { once: true });
  } else {
    button.classList.add("incorrect");
    feedback.textContent = `다시 생각해 보세요. ${lesson.explanation}`;
    feedback.classList.add("retry");
    completeButton.textContent = "개념 설명을 읽고 다시 도전하기";
    completeButton.disabled = false;
    completeButton.addEventListener("click", () => {
      resetInteraction();
      renderLesson();
    }, { once: true });
  }
}

function completeLesson() {
  const lesson = lessons[activeLesson];
  if (savedState.completed.includes(lesson.id)) return;
  savedState.completed.push(lesson.id);
  savedState.xp += 20;
  persistState();
  render();
}

function resetInteraction() {
  selectedPrediction = null;
  predictionSubmitted = false;
  quizAnswered = false;
}

function render() {
  renderNavigation();
  renderLesson();
  updateProgress();
}

render();
