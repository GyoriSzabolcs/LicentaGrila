const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const resetButton = document.getElementById('reset-btn')
const correctAnswersCounter = document.getElementById('correctAnswerCounter')
const counterDiv = document.getElementById('counterDiv')
const submitButton = document.getElementById('submit-btn')
const explanationText = document.getElementById('explanationText')
const text1 = document.getElementById("tipic-i-txt");
const text2 = document.getElementById("tipic-ii-txt");
const text3 = document.getElementById("tipic-iii-txt");
const text4 = document.getElementById("abstract-txt");

const algorithmsAndDataStructures = document.getElementById('algorithms-and-data-structures-btn');
const ComputerNetworks = document.getElementById('computer-networks-btn');
const databases = document.getElementById('databases-btn');
const flat = document.getElementById('flat-btn');
const computerArchitecture = document.getElementById('computer-architecture-btn');
const logics = document.getElementById('logics-btn');
const operatingSystems = document.getElementById('operating-systems-btn');
const graphsAndCombinatorics = document.getElementById('graph-and-combinatorics-btn');
const softwareEngineering = document.getElementById('software-engineering-btn');
const programmingIButton = document.getElementById('programming-i-btn');
const programmingIIButton = document.getElementById('programming-ii-btn');
const programmingIIIButton = document.getElementById('programming-iii-btn');

let counter = 0;
let totalCorrect = 0;
let correctPerQuestion;
let currentExplanation = ''
let failedQuestions = 0;

let shuffledQuestions, currentQuestionIndex

submitButton.addEventListener('click', setStatusForAnswers)

algorithmsAndDataStructures.addEventListener('click', startADS);
graphsAndCombinatorics.addEventListener('click', startGTC);
logics.addEventListener('click', startCL);
programmingIButton.addEventListener('click', startPI);
programmingIIButton.addEventListener('click', startPII);
programmingIIIButton.addEventListener('click', startPIII);
softwareEngineering.addEventListener('click', startSE);
databases.addEventListener('click', startDB);
computerArchitecture.addEventListener('click', startCA);
flat.addEventListener('click', startFLAT);
ComputerNetworks.addEventListener('click', startCN);
operatingSystems.addEventListener('click', startOS);

function hideButtons() {
  algorithmsAndDataStructures.classList.add('hide')
  ComputerNetworks.classList.add('hide')
  databases.classList.add('hide')
  flat.classList.add('hide')
  computerArchitecture.classList.add('hide')
  logics.classList.add('hide')
  operatingSystems.classList.add('hide')
  graphsAndCombinatorics.classList.add('hide')
  softwareEngineering.classList.add('hide')
  programmingIButton.classList.add('hide')
  programmingIIButton.classList.add('hide')
  programmingIIIButton.classList.add('hide')
  text1.classList.add('hide')
  text2.classList.add('hide')
  text3.classList.add('hide')
  text4.classList.add('hide')
}

function startSE() {

  hideButtons();

  nextButton.classList.remove('hide')
  startButton.classList.add('hide')
  submitButton.classList.remove('hide')
  shuffledQuestions = SoftwareEngineering.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function startFLAT() {

  hideButtons();

  nextButton.classList.remove('hide')
  startButton.classList.add('hide')
  submitButton.classList.remove('hide')
  shuffledQuestions = FormalLanguages.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function startDB() {

  hideButtons();

  nextButton.classList.remove('hide')
  startButton.classList.add('hide')
  submitButton.classList.remove('hide')
  shuffledQuestions = Databases.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function startCA() {

  hideButtons();

  nextButton.classList.remove('hide')
  startButton.classList.add('hide')
  submitButton.classList.remove('hide')
  shuffledQuestions = ComputerArchitectureQuestions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function startOS() {

  hideButtons();

  nextButton.classList.remove('hide')
  startButton.classList.add('hide')
  submitButton.classList.remove('hide')
  shuffledQuestions = OperatingSystemsQuestions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function startCN() {

  hideButtons();

  nextButton.classList.remove('hide')
  startButton.classList.add('hide')
  submitButton.classList.remove('hide')
  shuffledQuestions = ComputerNetworksQuestions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function startPI() {

  hideButtons();

  nextButton.classList.remove('hide')
  startButton.classList.add('hide')
  submitButton.classList.remove('hide')
  shuffledQuestions = ProgrammingI.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}
function startPII() {

  hideButtons();

  nextButton.classList.remove('hide')
  startButton.classList.add('hide')
  submitButton.classList.remove('hide')
  shuffledQuestions = ProgrammingII.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}
function startPIII() {

  hideButtons();

  nextButton.classList.remove('hide')
  startButton.classList.add('hide')
  submitButton.classList.remove('hide')
  shuffledQuestions = ProgrammingIII.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function startCL() {

  hideButtons();

  nextButton.classList.remove('hide')
  startButton.classList.add('hide')
  submitButton.classList.remove('hide')
  shuffledQuestions = ComputatuinalLogic.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function startGTC() {

  hideButtons();

  nextButton.classList.remove('hide')
  startButton.classList.add('hide')
  submitButton.classList.remove('hide')
  shuffledQuestions = GraphTheoryAndCombinatorics.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function startADS() {

  hideButtons();

  nextButton.classList.remove('hide')
  startButton.classList.add('hide')
  submitButton.classList.remove('hide')
  shuffledQuestions = AlgorithmsAndDataStructuresQuestions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    explanationText.innerHTML = ''
  currentQuestionIndex++
  setNextQuestion()
})

resetButton.addEventListener('click', () => {
    location.reload()
})

function startGame() {
  nextButton.classList.remove('hide')
  startButton.classList.add('hide')
  submitButton.classList.remove('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerHTML = question.question
  currentExplanation = question.explanation
  question.answers.sort(() => Math.random() - .5)
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerHTML = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  console.log(e.target)
  const correct = selectedButton.dataset.correct
  //setStatusClass(document.body, correct)
  countCorrectAnswers(correct)
  setSelectedAnswers(e.target, correct)
//   Array.from(answerButtonsElement.children).forEach(button => {
//     setStatusClass(button, button.dataset.correct)
//   })
}

function countCorrectAnswers(correct) {
    if (correct) {
        //counter++;
    }
}

function getNumberOfCorrectResponses() {
    // questions.answers.forEach(answer => {
    //     if(answer.correct) {
    //         totalCorrect++;
    //     }
    // })
    shuffledQuestions.forEach(question => {
        console.log(question)
        question.answers.forEach(answer => {
            if (answer.correct) {
                console.log(answer)
                console.log(totalCorrect)
                totalCorrect++;
            }
        })
    })
}

function setStatusForAnswers() {
    if (!(shuffledQuestions.length > currentQuestionIndex + 1)) {
        getNumberOfCorrectResponses();
        text = '<br> Number of wrong answers selected: ' + failedQuestions
        correctAnswersCounter.innerHTML = 'Number of correct answers: ' + counter + "/" + totalCorrect + text;
        counterDiv.classList.remove('hide')
      }
    Array.from(answerButtonsElement.children).forEach(button => {
             setStatusClass(button, button.dataset.correct)
           })
           explanationText.innerHTML = currentExplanation;
}
function setSelectedAnswers(element, correct){
    if (element.classList.contains('selected')) {
        element.classList.remove('selected')
        if (correct) {
            counter--;
            console.log(counter)
        } else {
            console.log(counter)
            failedQuestions--
        }
    } else {
    element.classList.add('selected')
    if (correct) { 
        counter++;
        console.log(counter)
    } else {
        console.log(counter)
        failedQuestions++
    }
}
}

function setStatusClass(element, correct) {
    console.log(element)

  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
    element.classList.remove('selected')
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const AlgorithmsAndDataStructuresQuestions = [
    {
        question: 'Let f(n) = n<sup>2</sup> , g(n) = n log n, h(n) = sin(n). Which of the following statements is true? Theremay be more than one correct answer',
        answers: [
          { text: 'f = Θ(g)', correct: false },
          { text: 'h = o(g)', correct: true },
          { text: 'f = Ω(h)', correct: true },
          { text: 'h = O(g)', correct: true }
        ],
        explanation: `T(n) is O(f(n))basically means that f(n) describes the upper bound for T(n) \
        T(n) is Omega(f(n))Ω(f(n)) basically means that f(n) describes the lower bound for T(n) \
        T(n) is Theta(f(n))Θ(f(n)) basically means that f(n) describes the exact bound for T(n) \
        T(n) is o(f(n))) basically means that f(n) is the upper bound for T(n) but that T(n) can never be equal to f(n)`
      },
      {
        question: 'A recursive program satisfies equation T(n) = 9T(n/3) + Θ(n<sup>2</sup>). What can we say about T(n)?There may be several correct answers.',
        answers: [
          { text: 'T(n) = O(n log n)', correct: false },
          { text: 'T(n) = Ω(n<sup>2</sup>)', correct: true },
          { text: 'T(n) = Θ(n<sup>2</sup>)', correct: false },
          { text: 'T(n) = O(n<sup>3</sup>)', correct: true }
        ],
        explanation: `T(n) is O(f(n))basically means that f(n) describes the upper bound for T(n) \
        T(n) is Omega(f(n))Ω(f(n)) basically means that f(n) describes the lower bound for T(n) \
        T(n) is Theta(f(n))Θ(f(n)) basically means that f(n) describes the exact bound for T(n) \
        T(n) is o(f(n))) basically means that f(n) is the upper bound for T(n) but that T(n) can never be equal to f(n)`
      },
      {
        question: 'In which of the following data structures does searching an item have worst-case complexityΘ(log n)? There may be more than one.',
        answers: [
          { text: 'Linked lists', correct: false },
          { text: 'Heaps', correct: false },
          { text: 'Red-black trees', correct: false },
          { text: 'Splay trees', correct: true }
        ],
        explanation: 'linked lists take O(n); heaps take O(n); red-black trees take Θ(logn); splay trees take theta(n)'
      },
      {
        question: 'Which binary tree traversal can be used to list all numbers in a binary search tree in sorted order? There may be several correct answers',
        answers: [
          { text: 'Breadth-first search', correct: false },
          { text: 'Preorder', correct: false },
          { text: 'Inorder', correct: true },
          { text: 'Postorder', correct: false }
        ],
        explanation: 'Inorder traversal lists all nubers in order from left to right'
      },
      {
        question: 'Which of the following sorting methods is NOT a comparison-based sort? There may be more than one right answer',
        answers: [
          { text: 'Quicksort', correct: false },
          { text: 'Radix sort', correct: true },
          { text: 'Insertion sort', correct: false },
          { text: 'Heap sort', correct: false }
        ],
        explanation: 'The ideea of Radix sort is to do digit by digit sort starting from least significant digit to most significant. Radix sort uses counting sort as a subroutine sort'
      },
      {
        question: 'Which of the following problem has an easy algorithm with complexity O(nlogn)? There may be more than one right answer',
        answers: [
          { text: 'Given a list L of n integers, find three numbers x,y,z ∈ L (if they exist) such that x+y=z.', correct: false },
          { text: 'Given a list L of n integers and a target value z, find two numbers in x,y ∈ L (if they exist) such that x+y=z', correct:  true},
          { text: 'Given a list L of n integers and a target value z, find two numbers in x,y ∈ L (if they exist) such that x-y=z', correct: true },
          { text: 'Given a list L of n integers, find three numbers x,y,z ∈ L (if they exist) such that x+y+z=0', correct: false }
        ],
        explanation: `Heap sort or Merge sort can be used`
      },
      {
        question: 'Which of the following algorithms correctly computes the length of a longest increasing susequence probem and has complexity O(n<sup>2</sup>)? There may be more than one right answer',
        answers: [
          { text: 'Put the numbers in the list in piles of decreasing numbers. A new number is added greedily to the first pile it can be added to, or starts a new pile if it cannot be added to any existing pile. The length of the LIS is the number of piles', correct: true },
          { text: 'We run a greedy algorithm, maintaining a list of increasing numbers. When processing a new number we add it to the LIS if possible, we discard it and proceed otherwise', correct: false },
          { text: 'We run a backtracking algorithm, maintaining the list of the biggestLIS seen so far. When encountering a new number we add it to the sequence if possible. If not we backtrack and continue with the next sequence.', correct: false },
          { text: 'We solve the problem by dynamic programming, computing the length of the LIS subsequence ending in a given term a<sub>k</sub> of the sequence. We then take the maximum of the so-computed LIS\'s', correct: true }
        ],
        explanation: `patience sorting O(nlogn) < O(n^2); dynamic programming : Use of any array to store LIS values at each index. O(n) complexity`
      },
      {
        question: 'We are given a list of courses, each with a start and an end time. We only have one room and want to schedule as many of these courses as possible. Which of the following algorithms finds and optimal solution? There may be more than one right answer',
        answers: [
          { text: 'Greedily choose the shortest courses', correct:  false},
          { text: 'Greedily choose courses that start first', correct:  false},
          { text: 'Greedily choose courses that end first', correct:  true},
          { text: 'Sort courses by their end time. Compute, for each course C<sub>k</sub>, a longest sequence of courses that ends with C<sub>k</sub>. Take the best such sequence over all k\'s', correct:  true}
        ],
        explanation: `Greedily sorting by end time ensures that most possible courses cand be selected.`
      },
      {
        question: 'A recursive algorithm reduces solving the problem of size n to solving for subproblems on size n/2 and then combining the results. The combination step taks f(n) steps. We want out algorithm to have a complexity of O(n<sup>2</sup>). \
        Which of the following are acceptable complexities for the combining step? There may be more than one right answer',
        answers: [
          { text: 'f(n) = O(1)', correct: true },
          { text: 'f(n) = O(n)', correct: true },
          { text: 'f(n) = O(nlogn)', correct: true },
          { text: 'f(n) = θ(n<sup>2</sup>)', correct: false }
        ],
        explanation: `Those 3 are smaller than O(n<sup>2</sup>)`
      },
      {
        question: 'What is the complexity of inserting a new intem in a sorted linked list of integers?',
        answers: [
          { text: 'O(1)', correct: false },
          { text: 'Θ(1)', correct: false },
          { text: 'O(n)', correct: true },
          { text: 'Θ(log n)', correct: false }
        ],
        explanation: `Only one traversal of the list is needed.`
      },
      {
        question: 'Which sorting algorithm is not recursive ? There may be multiple correct answers',
        answers: [
          { text: 'Mergesort', correct: false },
          { text: 'Quicksort', correct: false },
          { text: 'Heapsort', correct: false },
          { text: 'Counting sort', correct: true }
        ],
        explanation: `Mergesort - calls merge for 2 halves
        Quicksort - applies quicksort on the left part of the pivot and then the right side of the pivot
        Heapsort - The heapify procedure calls itself recursively to build heap in top down manner`
      },  
      {
        question: 'What data structure can we use to implement an iterative tree traversal?',
        answers: [
          { text: 'Queue', correct: false },
          { text: 'Stack', correct: true },
          { text: 'Hash table', correct: false },
          { text: 'Red-black tree', correct: false }
        ],
        explanation: `1) Create an empty stack S
        2) Initialize current node as root
        3) Push the current node to S and set current = current->left until current is NULL
        4) If current is NULL and stack is not empty then:
          a) Pop the top item from stack
          b) Print the popped item, set current = popped->right
          c) Go to step 3)
        5) If current is NULL and stack is empty then we are done`
      }, 
      {
        question: 'What is the complexity of computing the median?',
        answers: [
          { text: 'Θ(n)', correct: true },
          { text: 'Θ(n log n)', correct: false },
          { text: 'Θ(1)', correct: false },
          { text: 'Θ(n<sup>2</sup>)', correct: false }
        ],
        explanation: `It is only required to parse the array once, hence the complexity is Θ(n).`
      }, 
      {
        question: 'In a red-black tree which of the following is not necessarily true ? There may be several correct answers.',
        answers: [
          { text: 'The root is red', correct: true },
          { text: 'The root is black', correct: false },
          { text: 'Every path from the root to leaves has the same number of red nodes', correct: true },
          { text: 'A black parent can only have red children', correct: true }
        ],
        explanation: `Root is black, all childred of red are always black`
      }, 
      {
        question: 'Which of the following is correct? There may be several correct answers.',
        answers: [
          { text: 'The worst-case complexity of insert, delete, search operations in a binarry search tree is O(log n)', correct: false },
          { text: 'The worst-case complexity of insert, delete, search operations in an AVL tree is O(log n)', correct: true },
          { text: 'The worst-case complexity of insert, delete, search operations in a splay tree is O(log n)', correct: false },
          { text: 'The worst-case complexity of insert, delete, search operations in a red-black tree is O(log n)', correct: true }
        ],
        explanation: `AVL and red-black trees are self balancing and have average and worst case O(logn)
        BST have O(n) and splay trees have Θ(n)`
      }, 
      {
        question: 'Which of the following sorting algorithm is not subject to the Ω(n log n) lower bound for sorting?',
        answers: [
          { text: 'Counting sort', correct: false },
          { text: 'Heap sort', correct: true },
          { text: 'Radix sort', correct: false },
          { text: 'Merge sort', correct: true }
        ],
        explanation: `Heap sort and Merge sort have O(nlogn) worst case, means they are the Ω(n log n);
        Counting sort takes O(n+k) where k is the range of input;
        Radix Sort takes O(nk) worst case;
        So they are O(nlogn) , not Omega(nlogn);`
      }, 
]

const GraphTheoryAndCombinatorics = [
  {
      question: 'Which is the rank of the permutation (4, 1, 6, 2, 3, 5) in lexicographic order?',
      answers: [
        { text: '376', correct: false },
        { text: '378', correct: true },
        { text: '380', correct: false },
        { text: '720', correct: false }
      ],
      explanation: `<a href="https://www.youtube.com/watch?v=WDdlLb43T-g" target="_blank"> Link to youtube explanation </a>`
    },
    {
      question: 'A message is a sequence of two types of signals: of type A which last for 1 second and of type B which last for 2 seconds. E.g., the message ABAAB lasts 7 seconds. How many different messages last 10 seconds?',
      answers: [
        { text: '68', correct: false },
        { text: '32', correct: false },
        { text: '89', correct: true },
        { text: '144', correct: false  }
      ],
      explanation: `<img src="img/gtc1.jpg" width="500" height="500">`
    },
    {
      question: 'In how many ways can be colored the following configuration by using 2 colors: red and black?',
      answers: [
        { text: '64', correct: false },
        { text: '48', correct: false },
        { text: '128', correct: true },
        { text: '36', correct: false  }
      ],
      explanation: `2<sup>7</sup> ??? maybe it is 48 in pdf`
    },
    {
      question: 'In how many ways can we split a group of 50 persons in 49 nonempty groups?',
      answers: [
        { text: '50', correct: false },
        { text: '1225', correct: true },
        { text: '49', correct: false },
        { text: '2450', correct: false  },
        { text: '19600', correct: false  }
      ],
      explanation: `combination of 50 taken by 2, or 49*50/2`
    },
    //5
    {
      question: 'In how many ways can we choose 5 fruits from a market stall if on the stall there are: 5 apples, 5 preas and 5 apricots',
      answers: [
        { text: '21', correct: true },
        { text: '56', correct: false },
        { text: '120', correct: false },
        { text: '6', correct: false  },
        { text: '30', correct: false  }
      ],
      explanation: `We use combinatorics with repetition of n elements C(r+n-1, r); n=3 types of fruits; r = 5 fruits needed => C(5+3-1, 5) = 21`
    },
    {
      question: 'Which of the following recurrence relations hold for any n > k > 0',
      answers: [
        { text: '(a) (n|k) = ((n-1)|k) + ((n-1)|(k-1))', correct: true },
        { text: '(b) {n|k} = {(n-1)|k} + k * {(n-1)|(k-1)}', correct: false },
        { text: '(c) {n|k} = k * {(n-1)|k} + {(n-1)|(k-1)}', correct: true },
        { text: '(d) [n|k] = [(n-1)|k] + (n-1) * [(n-1)|(k-1)]', correct: false  },
      ],
      explanation: `(a)The number of k combinations of a set with n elements; (c)The Stirling set number is the number of ways in which
      we can partition a set of n elements in exactly k non-empty and disjoint`
    },
    {
      question: 'Which is the minimum weight spanning tree of the following connected graph? (hint: apply the Kruskal algoritm)<br/> <img src="img/gtc2.png" width="500" height="500">',
      answers: [
        { text: '43', correct: false },
        { text: '40', correct: true },
        { text: '36', correct: false },
        { text: '41', correct: false  },
      ],
      explanation: `(a)The number of k combinations of a set with n elements; (c)The Stirling set number is the number of ways in which
      we can partition a set of n elements in exactly k non-empty and disjoint`
    },
    {
      question: 'Which is the Prüfer sequence of the following tree? <img src="img/gtc3.png" width="500" height="500">',
      answers: [
        { text: '8, 3, 4, 5, 7, 6, 1, 9, 10, 11, 2', correct: false },
        { text: '3, 4, 5, 7, 6, 1, 8, 2, 10, 11', correct: false },
        { text: '8, 11, 9, 6, 1, 8, 8, 2, 2', correct: true },
        { text: '8, 11, 9, 6, 1, 8, 2, 2, 8', correct: false },
      ],
      explanation: `Remove the smallest node and put parent`
    },
    {
      question: 'How many different trees with 5 nodes, labeled with numbers from 1 to 5, there exists?',
      answers: [
        { text: '10', correct: false },
        { text: '273', correct: false },
        { text: '32', correct: false },
        { text: '120', correct: false },
        { text: '125', correct: true },
      ],
      explanation: `n^(n-2)`
    },
    //10
    {
      question: 'In how many ways can we color the following graph G with tree colors? <img src="img/gtc4.png" width="500" height="500">',
      answers: [
        { text: '0', correct: false },
        { text: '288', correct: true },
        { text: '336', correct: false },
        { text: '1874', correct: false },
      ],
      explanation: `TBD`
    },
    {
      question: 'Which of the following graphs are eulerian graphs and which ones are not? <img src="img/gtc5.png" width="500" height="500">',
      answers: [
        { text: 'G1: no, G2,G3: yes', correct: true },
        { text: 'G1: yes, G2,G3: no', correct: false },
        { text: 'G1,G2:yes, G3: no', correct: false },
        { text: 'none', correct: false },
        { text: 'All of the above', correct: false },
      ],
      explanation: `Essentially, a graph is considered Eulerian if you can start at a vertex, traverse through every edge only once, and return to the same vertex you started at.`
    },
]

const ComputatuinalLogic = [
  {
      question: 'Consider the predicate logic language that contains the following symbols <br/>'
      + `variables indicated with lower case letters<br/>`
      + `function symbols: + binary infix, - unary prefix, * binary infix<br/>`
      + `predicate symbols: =,<,<= all binary, infix<br/>`,
      answers: [
        { text: '(0*x)-1', correct: false },
        { text: '1+(z*x)<0', correct: false },
        { text: 'x+((-1)*0)', correct: true },
        { text: '0*(y+1)', correct: true }
      ],
      explanation: `- is prefix only. < would need brackets like (1+(z*x)) to work i think`
  },
    {
      question: `For the following propositional formulae, and the truth valuation {P,~Q}:`,
      answers: [
        { text: '((P->Q)^((~Q)^P)) evaluates to TRUE', correct: false },
        { text: '((P->Q)->(Q->P)) evaluates to TRUE', correct: true },
        { text: '((~(PvQ))^(~Q)) evaluates to FALSE', correct: true },
      ],
      explanation: `Use truth table to check, only 1 implies 0 is 0, other implications 1`
    },
    {
      question: `Which of the following statements are true?`,
      answers: [
        { text: 'If a propositional formula is valid, then it is satisfiable', correct: true },
        { text: 'If a propositional formula is not valid then it is satisfiable', correct: false },
        { text: 'If a propositional formula is not valid then its negation is satisfiable', correct: true },
        { text: 'If a propositional formula is not valid, then its negation is valid', correct: false },
      ],
      explanation: `A formula is valid if it is true for all values of its terms. Satisfiability refers to the existence of a combination of values to make the expression true. If it is not valid for any situation, that means that the negation is always true, so 
      it is satisfiable.`
    },
    {
    question: `The formula P<->Q is _____ formula Q->R, R->(P^Q), P->(QvR).`,
      answers: [
        { text: 'logically equivalent to the conjunction of', correct: false },
        { text: 'a logical consequence of', correct: true },
        { text: 'logically equivalend to the disjunction of', correct: false },
      ],
      explanation: `TBD`
    },
    //5
    {
      question: `What is the resolvent of clauses {P, ~Q, R} and {~P, Q, S}`,
        answers: [
          { text: 'null', correct: false },
          { text: '{P, ~P, R, S}', correct: true },
          { text: '{R, S}', correct: false },
        ],
        explanation: `TBD`
      },
      {
        question: `To establish wether a formula G is a logical consequence of formulae F1...Fn which of the following methods can be applied?`,
          answers: [
            { text: 'check that (F1^...^Fn) -> G is unsatisfiable', correct: false },
            { text: 'check that ~F1v...v~Fn v G is unsatisfiable', correct: false },
            { text: 'check that ~F1v...v~Fn v G is valid', correct: true },
            { text: 'check that F1^...^Fn ^ ~G is unsatisfiable', correct: true },
          ],
          explanation: `false or true is true. true and false is false. valid if always true, satisfiable if it can be true`
        },
        {
          question: `There is a formula which is logically equivalent to <br/> <img src="img/cl1.png" width="500" height="500"> <br/> Where | is NAND  (i.e. P|Q = ¬(P ∧ Q))`,
            answers: [
              { text: '{~,v}', correct: true },
              { text: '{v,^}', correct: false },
              { text: '{|}', correct: true },
              { text: '{⊥, ->}', correct: true },
            ],
            explanation: `TBD`
          },
          {
            question: `The clause set corresponding to the formula (¬P → (Q ∧ R)) → (P → ¬Q) is :`,
              answers: [
                { text: '{{¬P, ¬Q}}', correct: true },
                { text: '{{P, ¬Q}, {P, R}, {¬Q, R}},', correct: false },
                { text: '{{P, ¬Q, ¬R}, {P, Q, R}, {¬P, ¬Q, R}}', correct: false },
              ],
              explanation: `TBD`
            },
            {
              question: `Consider the clause set {{F, ¬G, H}, {¬F, ¬G}, {G, H}, {¬F, H}, {F, G, ¬H}} Which of the following rules of the Davis-Putnam-Logemann-Loveland method can be applied to
              it?`,
                answers: [
                  { text: 'the pure literal rule', correct: false },
                  { text: 'the 1 literal rule', correct: false },
                  { text: 'the splitting rule', correct: true },
                ],
                explanation: `<img src="img/cl2.png" width="500" height="500">`
            },
            {
                question: `To prove a goal G when a disjunction A ∨ B is known:`,
                  answers: [
                    { text: 'assume A and prove G then assume B and prove G,', correct: false },
                    { text: 'assume A and prove G,', correct: false },
                    { text: 'assume ¬A and prove B and G.', correct: false },
                  ],
                  explanation: `TBD`
            },
            {
              question: 'Consider the predicate logic language that contains the following symbols <br/>'
              + `variables indicated with lower case letters<br/>`
              + `function symbols: + binary infix, - unary prefix, * binary infix<br/>`
              + `predicate symbols: =,<,<= all binary, infix<br/>`,
              answers: [
                { text: '∀x∀y((x ≤ 1) ⇒ (1 = 0)),', correct: true },
                { text: '(x = y) ∧ (1 + 0),', correct: false },
                { text: '(x < (1 + 0)) ∨ ∀x∃y(x = (−y)),', correct: true },
                { text: '∀x((x − 1) = y) ∧ (x < 0).', correct: false }
              ],
              explanation: `- is prefix, TBD`
          },
          {
            question: `Which of the following are inductive domains:`,
            answers: [
              { text: 'natural numbers,', correct: true },
              { text: 'integer numbers', correct: false },
              { text: 'propositional logic formulae', correct: true },
              { text: 'list of integers', correct: false }
            ],
            explanation: `TBD`
        },
      {
          question: `Using the definition of well formed propositional formulae (wffs), decide which of the following are propositional formulae:`,
          answers: [
            { text: '(((P → Q) ∨ S) ↔ T)', correct: true },
            { text: '(P → (Q ∧ (S → T)))', correct: true },
            { text: '(¬(B(¬Q)) ∧ R)', correct: false },
          ],
          explanation: `Any capital letter by itself is a WFF.Any WFF can be prefixed with “~”. (The result will be a WFF too.).
          Any two WFFs can be put together with “•”, “∨”, “⊃”, or “≡” between them, enclosing the result in parentheses. (This will be a WFF too.).
           Incorrect because no predicate between B and ~Q`
      },
      {
        question: `What is the relation between propositions (F ∧ G) → H and F → (G → H).`,
        answers: [
          { text: 'they are logically equivalent', correct: true },
          { text: 'the first one is a logical consequence of the second one', correct: true },
          { text: 'the second one is a logical consequence of the first one', correct: true },
          { text: 'they are not related in any way', correct: false },
        ],
        explanation: `TBD`
    },
    {
      question: `Which of the following formulae are in Disjunctive Normal Form?`,
      answers: [
        { text: 'P', correct: true },
        { text: '¬P ∨ Q', correct: true },
        { text: 'P ∧ ¬Q ∧ S', correct: true },
        { text: '(P ∧ ¬Q ∧ S) ∨ ¬S', correct: true },
      ],
      explanation: `A logical formula is considered to be in DNF if it is a disjunction of one or more conjunctions of one or more literals.`
  },
  {
    question: `Which of the following methods in propositional logic is a reasoning method (i.e. satisfies the properties of reasoning):`,
    answers: [
      { text: 'truth tables', correct: false },
      { text: 'resolution', correct: true },
      { text: 'the Davis Putnam method', correct: true },
    ],
    explanation: `TBD`
  },
  {
    question: `Consider the ternary boolean function which implements parity: it returns T if the number of
    T inputs is odd, F otherwise. Which of the following propositional formulae corresponds to
    (describes) this function?`,
    answers: [
      { text: '(P ∧ Q ∧ R) → (P ∨ Q ∨ R)', correct: false },
      { text: '(¬P ∧ ¬Q ∧ R) ∨ (¬P ∧ Q ∧ ¬R) ∨ (P ∧ ¬Q ∧ ¬R) ∨ (P ∧ Q ∧ R)', correct: true },
      { text: '(¬P → (Q ∧ R)) ∨ (¬R → (P ∧ Q)) ∨ (¬Q → (P ∧ R))', correct: true },
    ],
    explanation: `TBD`
  },
  {
    question: `The clause set corresponding to the formula (¬P → (Q ∧ R)) → (P → ¬Q) is:`,
    answers: [
      { text: '{{¬P, ¬Q}}', correct: true },
      { text: '{{P, ¬Q}, {P, R}, {¬Q, R}}', correct: false },
      { text: '{{P, ¬Q, ¬R}, {P, Q, R}, {¬P, ¬Q, R}}', correct: false },
    ],
    explanation: `TBD`
  },
  {
    question: `Consider the clause set containing the following clauses: {P, Q, ¬R},{¬P, R},{P, ¬Q, S},{¬P, ¬Q, ¬R},{P, ¬S}. The formula corresponding to this clause set is:`,
    answers: [
      { text: 'valid', correct: false },
      { text: 'satisfiable', correct: true },
      { text: 'unsatisfiable', correct: false },
    ],
    explanation: `Show that it can be both true and false`
  },
  {
    question: `The Davis-Putnam method returns the answer satisfiable:`,
    answers: [
      { text: 'when the empty clause is generated,', correct: false },
      { text: 'when the empty clause set is generated,', correct: true },
      { text: 'when no new clauses can be generated, and the empty clause is not in the clause set.', correct: true },
    ],
    explanation: `TBD`
  },
]

const FormalLanguages = [
  {
      question: `For the mobile application you are implementing, you have to store in the database only the
      Romanian phone numbers (e.g. +40724370012 / 0040724370012) and email addresses with a
      Romanian domain (e.g. ion@domeniu.ro; popescu.maria@dom.ro). The phone numbers must
      have exactly 9 digits after the Romanian prefix 0040/+40. The name of the domain and the
      extension of the email are written in lowercase letters and are case sensitive. Which of the
      following regular expressions express your needs:`,
      answers: [
        { text: `(+407|00407)(0|...|9)(0|...|9)(0|...|9)(0|...|9)(0|...|9)(0|...|9)(0|...|9)(0|...|9);
        ((a|...|z|A|...|Z)+.(a|...|z|A|...|Z)+@(a|...|z)+.ro)|((a|...|z|A|...|Z)+@(a|...|z)∗.ro)`, correct: false },
        { text: `(+407|00407)(0|...|9)(0|...|9)(0|...|9)(0|...|9)(0|...|9)(0|...|9)(0|...|9)(0|...|9);
        ((a|...|z|A|...|Z)+.(a|...|z|A|...|Z)+@(a|...|z)+.ro)|((a|...|z|A|...|Z)+@(a|...|z)+.ro)`, correct: true },
        { text: `(+407|00407)(0|...|9)(0|...|9)(0|...|9)(0|...|9)(0|...|9)(0|...|9)(0|...|9)(0|...|9);
        ((a|...|z|A|...|Z)+.(a|...|z|A|...|Z)+@(a|...|z)+.ro) ((a|...|z|A|...|Z)+@(a|...|z)+.ro)`, correct: false },
        { text: `(+407|00407)(0|...|9)(0|...|9)(0|...|9)(0|...|9)(0|...|9)(0|...|9)(0|...|9);
        ((a|...|z|A|...|Z)+.(a|...|z|A|...|Z)+@(a|...|z)+.ro)|((a|...|z|A|...|Z)+@(a|...|z)+.ro)`, correct: false }
      ],
      explanation: `missing |, not 9 numbers, * instead if +.`
  },
  {
    question: `Assume you have to build push-down automaton simulating a natural language processor recognizing numerical palindromes. Which of the following grammars G = (VN , VT , S, P) help you building the solution:`,
    answers: [
      { text: 'VN = {S}, VT = {0, ..., 9}, S, P = {S → 0S0|1S1|...|9S9|λ}', correct: true },
      { text: 'VN = {S}, VT = {0, ..., 9}, S, P = {S → 0S0|1S1|...|9S9|0|...|9}', correct: true },
      { text: 'VN = {S}, VT = {0, ..., 9}, S, P = {S → 0S0|1S1|...|9S9|0|...|9|λ}', correct: true },
    ],
    explanation: `TBD`
},
{
  question: `Assume you have a program, P, written in C, recognizing the language of even binary numbers.
  You would like to find an optimal program, w.r.t. memory and storage consumption, which does
  the same job. How would you proceed:`,
  answers: [
    { text: 'use pointers instead of arrays and eliminate unused variables;', correct: false },
    { text: 'rewrite the program such that it implements the minimal deterministic finite automaton recognizing the above mentioned language;', correct: true },
    { text: 'rewrite the program such that it implements the nondeterministic finite automaton which recognizes the same language.', correct: false },
  ],
  explanation: `TBD`
},
{
  question: `Assume you have to construct a finite automata recognizing the keywords FOR and FORK. Which
  grammar G = {VN , VT , S, P} would you use for that purpose:`,
  answers: [
    { text: 'VN = {S}, VT = {F, O, R, K}, S, P = {S → F OR|F ORK}', correct: false },
    { text: 'VN = {S}, VT = {F OR, F ORK}, S, P = {S → F OR|F ORK}', correct: true },
    { text: 'VN = {S, x1, x2, x3}, VT = {F, O, R, K}, S, P = {S → F x1, x1 → Ox2, x2 → Rx3|R, x3 → K}', correct: true },
  ],
  explanation: `TBD`
},
{
  question: `Consider the set of all strings of balanced parentheses of two types: round and square. An
  example of where these strings come from is as follows. If we take expressions in C, which use
  round parentheses for grouping and for arguments of function calls, and use square brackets
  for array indexes, and drop out everything but the parentheses, we get all strings of balanced
  parentheses of these two types. For example, f(a[i] ∗ (b[i][j], c[g(x)]), d[i]) becomes the balanced
  parentheses string ([]([][][()])[]). A grammar G = {VN , VT , S, P} for generating the strings of
  round and squared parentheses that are balanced is:`,
  answers: [
    { text: 'VN = {S}, VT = {(,), [, ]}, S, P = {S → SS|[S]|(S)|()|[]}', correct: false },
    { text: 'VN = {S}, VT = {(,), [, ]}, S, P = {S → (S)|[S]|()|[]|λ}', correct: true },
    { text: 'VN = {S}, VT = {(,), [, ]}, S, P = {S → SS|(S)|[S]|λ}', correct: false },
  ],
  explanation: `TBD`
},
]

const ProgrammingI = [
  {
    question: `Assuming the prototype (declaration) of square is in sight before the call <br/>
    int a=2;<br/>
    square(a)<br/>
    and square is defined as<br/>
    void square(int x) {<br/>
      x=x*x;<br/>
    }`,
    answers: [
      { text: `after the call, a has value 2`, correct: true },
      { text: `after the call, a has value 4`, correct: false },
      { text: `the definition of square does not serve the purpose of squaring the actual argument in the caller funtion`, correct: true },
      { text: `the definition of square is formally correct`, correct: true }
    ],
    explanation: `The deffinition is formally correct, but the variable is not modified ouside of the method.`
  },
  {
    question: `What’s wrong with the sequence: <br/>
    int t[N], *low=t, *mid, *high=&t[N-1];<br/>
    mid = (low+high) / 2;`,
    answers: [
      { text: `addition of two pointers is an illegal operation`, correct: true },
      { text: `a pointer can’t be initialized with an array`, correct: false },
      { text: `the initialization of low and high is incorrect`, correct: false },
      { text: `mid can’t be initialized with a real value (when low+high is odd!)`, correct: false }
    ],
    explanation: `Pointers contain adresses, and the addition of addresses is an illegal operation as it makes no sense.`
  },
  {
    question: `Knowing that the . and the -> operator have equal precedence, higher than the precedence of the
    * operator and assuming the following declarations, which of the expressions bellow are correct? <br/>
    struct point {<br/>
      int x, y;<br/>
      };<br/>
      struct rectangle{<br/>
      struct point p1, p2;<br/>
      } *r[N];<br/>
      `,
    answers: [
      { text: `r[i].p1.x`, correct: false },
      { text: `r[i]->p1.x`, correct: true },
      { text: `(*r[i]).p1.x`, correct: true },
      { text: `*r[i].p1.x`, correct: false }
    ],
    explanation: `The variable is a pointer to the structure variable. when accessing members either -> or (*r). can be used.`
  },
  {
    question: `Which of the following are means of communication (sharing of data) between functions?`,
    answers: [
      { text: `a function call`, correct: false },
      { text: `local variables`, correct: false },
      { text: `global variables`, correct: true },
      { text: `actual arguments`, correct: true },
      { text: `returned value`, correct: true },
      { text: `file inclusion`, correct: false }
    ],
    explanation: `Global variables can be called from any function. Arguments can be received by the method. Return vallue can communicate the result of an operation`
  },
  //5
  {
    question: `Which of the following storage classes is implicit, due to the place of the variable’s declaration:`,
    answers: [
      { text: `static`, correct: true },
      { text: `auto`, correct: true },
      { text: `register`, correct: false },
      { text: `extern`, correct: false }
    ],
    explanation: `Auto is the default storage class for all the variables declared inside of functions/blocks, the scope is limited to that.
    The static storage class is used to declare static variables. Static variables have a propperty where scope is within the whole programm`
  },
  {
    question: `Can two functions, neither of whom calls the other, communicate (share data)?`,
    answers: [
      { text: `no`, correct: false },
      { text: `yes, through messages`, correct: false },
      { text: `eventually through glabal variables`, correct: true },
    ],
    explanation: `As global variables can be accessed from anywhere`
  },
  {
    question: `Given float x=2.5; the value of the expression 3.0*x+10/4 is:`,
    answers: [
      { text: `10.0`, correct: false },
      { text: `9.5`, correct: true },
      { text: `of type double`, correct: true },
      { text: `of type float`, correct: false }
    ],
    explanation: `3.0*x = 7.5, 10/4=2 because int, => 9.5; int*float = double`
  },
  {
    question: `Which of the following name predefined integer data types in C`,
    answers: [
      { text: `char`, correct: true },
      { text: `double`, correct: false },
      { text: `short`, correct: true },
      { text: `int`, correct: true },
      { text: `byte`, correct: false },
      { text: `long`, correct: true },
    ],
    explanation: `short and long are integer modifiers. char is -128 - 127`
  },
  {
    question: `The type of p, used in the expression p->m is:`,
    answers: [
      { text: `pointer to some structure`, correct: true },
      { text: `the type of m`, correct: false },
      { text: `void*`, correct: false },
    ],
    explanation: `The syntax when accessing a member of a struct is pointerName->memberVariable`
  },
  //10
  {
    question: `Knowing that "0123456789" is the memory address where the string constant is generated, which
    is the result of evaluating the expression: "0123456789"[i] if i=10?
    `,
    answers: [
      { text: `the expression is syntactivally wrong`, correct: false },
      { text: `undefined`, correct: false },
      { text: `\'\\0\'`, correct: true },
      { text: `of type char`, correct: true }
    ],
    explanation: `Every c array has its end as the end of array charated \\0 to denote the end`
  },
  {
    question: `What would the value of q-p be if: int t[20], *p=t, *q=&t[19];`,
    answers: [
      { text: `19`, correct: true },
      { text: `20`, correct: false },
      { text: `t[19 ]- t[0]`, correct: false },
      { text: `It is illegal to substract a pointer from another pointer!`, correct: false }
    ],
    explanation: `Pointer P points to the whole array in the memory.
    The pointer q is pointing to the same array but to the 19th position. If we subtract p from q we get the without the 19th position therefore value is 19`
  },
]

const ProgrammingII = [
  {
    question: `A C++ constructor has the following properties:`,
    answers: [
      { text: 'It is a member function in a class with the name matching the class name', correct: true },
      { text: 'It is a member function that may return a value', correct: false },
      { text: 'It is a member function without a return value', correct: true },
      { text: 'It is a member function whose role is to initialise the instances of the class', correct: true },
      { text: 'It is a member function whose role is to release allocated memory', correct: false },
      { text: 'A given class cannot have more than one constructor', correct: false }
    ],
    explanation: `Process of elimination. Constructors have no return value, c++ uses dynamic memory allocation, and a class can have multiple contructors, with different parameters`
  },
  {
    question: `Which of the following statements are true about templates?`,
    answers: [
      { text: 'Template is a feature of C++ that allows us to write one code for different data types', correct: true },
      { text: 'Template is an example of compile time polymorphism', correct: true },
      { text: 'Templates can not be used for user-defined data types.', correct: false },
      { text: 'It is not possible to have user-defined templates, it is only possible to use those already created', correct: false }
    ],
    explanation: `Function templates are special functions that can operate with generic types. It can be adapted to work with multiple classes or types without repeating the code.`
  },
  {
    question: `Which of the following statements is true?`,
    answers: [
      { text: 'A static function cannot throw an exception', correct: false },
      { text: 'A static function cannot access a non-static member of the class', correct: true },
      { text: 'A static function cannot access a static member of the class', correct: false },
      { text: 'A static member cannot be modified in const non-static member functions', correct: false }
    ],
    explanation: `Static funtions are not associated with class object, non-static variables are. Every object has it's own copy of non static variable.
    Since static fintion does not know about the object, so it is impossible for a static function to know on which class object it is being called.`
  },
  {
    question: `Exceptions are:`,
    answers: [
      { text: 'errors that appears when a program is compiled', correct: false },
      { text: 'special situation in programs resolved with the help of tests of type if(variable == NULL)', correct: false },
      { text: 'errors that appears at runtime', correct: true },
      { text: 'thrown using the try statement and resolved using the catch statement', correct: false },
      { text: 'thrown using the throw statement and resolved using the try and catch statements', correct: true }
    ],
    explanation: `Exceptions provide a wat to react to exceptional circumstances(like runtime errors) in programs by transferring control to special functions called handlers. 
    To catch exceptions a try catch block is used.`
  },
  {
    question: `Match the verb with the class relationship it describes <br/> <img src="img/pii1.png">`,
    answers: [
      { text: '(1, a), (2, b), (3, c)', correct: false },
      { text: '(1, b), (2, c), (3, a)', correct: false },
      { text: '(1, c), (2, b), (3, a)', correct: true },
      { text: '(1, b), (2, a), (3, c)', correct: true }
    ],
    explanation: `is - inheritance; has - composition/aggregation; uses - association`
  },
  {
    question: `The OCP principle refers to:`,
    answers: [
      { text: 'responsibilities that a class must implement', correct: false },
      { text: 'defining a consistent class hierarchy', correct: false },
      { text: 'problems that appear because of duplicate code', correct: false },
      { text: 'the possibility of class extension and avoidance of the modification of existing classes / code', correct: true }
    ],
    explanation: `Open-Closed Principle. Part of SOLID. The general ideea of this principle is to write code so that it will add functionality without changing existing code.
    This helps avoiding the need to change a class, and that means all depenging classes need to be changed.`
  },
  {
    question: `Which of the following statements are false with respect to operator overloading in C++:`,
    answers: [
      { text: 'It is possible to add new operators to the language', correct: true },
      { text: 'It is possible to change the arity of the operator (number of accepted operands)', correct: true },
      { text: 'There are operators that cannot be overloaded', correct: false },
      { text: 'One can use either a member function or a global function to implement an operator overload.', correct: false }
    ],
    explanation: `The overload operator declaration needs to be with the same name in the same scope, and can have different arguments and different implementations.`
  },
  {
    question: `If a class X has pointer variable members, then the class should also contain:`,
    answers: [
      { text: 'an empty destructor X(){}', correct: false },
      { text: 'a fiend function that copies an object of class X', correct: false },
      { text: 'an overload of the assignment operator', correct: true },
      { text: 'a copy constructor', correct: true },
      { text: 'an overload of the == operator', correct: false },
      { text: 'a destructor that releases the memory pointed by the members of type pointer', correct: true }
    ],
    explanation: `TBD`
  },
  {
    question: `Given the following code:  <br/> <img src="img/pii2.png"> <br/> How many times the constructors of class Date are invoked?`,
    answers: [
      { text: '2', correct: false },
      { text: '3', correct: false },
      { text: '4', correct: true },
      { text: '5', correct: false }
    ],
    explanation: `first is called 2 times, copy constructor is also called two times.`
  },
  {
    question: `Which of the following statements is true? <br/> <img src="img/pii3.png">`,
    answers: [
      { text: '', correct: false },
      { text: '', correct: false },
      { text: '', correct: true },
      { text: '', correct: true }
    ],
    explanation: ``
  },
]

const ProgrammingIII = [
  {
    question: `What data encapsulation refers to?`,
    answers: [
      { text: `Encapsulation of specific expertise into a class;`, correct: false },
      { text: `Hiding access to the private state of an object;`, correct: true },
      { text: `Making all the attributes of a class private;`, correct: false },
      { text: `Including no methods in a class but only attributes;`, correct: false },
      { text: `Hiding access to the entire state of an object`, correct: false }
    ],
    explanation: `Encapsulation is one of the 4 fundamental OOP concepts. Variables of a class are hiden from other classes, and only 
    accessible through methods. This is also known as hiding data.`
  },
  {
    question: `Which of the following statements are false for the Java language?`,
    answers: [
      { text: `The multiple inheritance can be obtained by applying the simple inheritance by a number of times`, correct: true },
      { text: `The simple inheritance can be simply obtained implementing a single interface;`, correct: true },
      { text: `Only the abstract class can benefit from multiple inheritance;`, correct: true },
      { text: `The language has extended inheritance which can replace multiple inheritance;`, correct: true }
    ],
    explanation: `All are false. Multiple inheritance is impossible, implementing an interface is not inheritance`
  },
  {
    question: `Which statement from the ones below are true in relation with the Java language?`,
    answers: [
      { text: `The final keyword applies to classes, attributes and methods;`, correct: true },
      { text: `A final method can only call other final methods in the same class;`, correct: false },
      { text: `A final method in a class cannot be overriden in subclasses;`, correct: true },
      { text: `A final attribute can be set only once;`, correct: true },
      { text: `Final attributes can only exist in final classes`, correct: false }
    ],
    explanation: `Final variables cannot be changed, final methods cannot be overriden, final classes cannot be extended`
  },
  {
    question: `Which of the following assertions hold in relation with the Java language?`,
    answers: [
      { text: `Inheritance can always be replaced by objects’ composition;`, correct: false },
      { text: `A class can implement any number of interfaces;`, correct: true },
      { text: `Using objects’ composition provide a possibility to avoid access restrictions;`, correct: false },
      { text: `Object composition is also referred as objects aggregation`, correct: false }
    ],
    explanation: `Only one parent class can be extended. Multiple inheritance is not allowed. interfaces are not classes, but multiple interfaces can be implemented.`
  },
  {
    question: `What is true about the String class in Java?`,
    answers: [
      { text: `The content of a String cannot be modified after creation`, correct: true },
      { text: `The == operator is used to compare the content of two String objects`, correct: false },
      { text: `The String class is final`, correct: true },
      { text: `The String class has an attribute called size providing the length of the string`, correct: false }
    ],
    explanation: `The string class is immutable, so once created it cannot be changed. Strigns are final to not not allow others to extend and destroy immutability.`
  },
  {
    question: `Which of the following statements is true about a Java abstract class:`,
    answers: [
      { text: `A class which cannot be instantiated`, correct: true },
      { text: `A class having at least an abstract method`, correct: false },
      { text: `A class defined using the abstract keyword`, correct: true }
    ],
    explanation: `A class declared with abstract keyword. It can have both abstract and non abstract methods.`
  },
]

const SoftwareEngineering = [
  {
    question: `Software verification can imply`,
    answers: [
      { text: `automatic static analysis`, correct: true },
      { text: `assesing usefulness and usability of the software in operational situations`, correct: false },
      { text: `debugging`, correct: false },
      { text: `software inspections`, correct: true },
      { text: `testing to prove error existence`, correct: false },
      { text: `verify that software meets user requirements`, correct: true },
    ],
    explanation: `It involves people examining the source representation with the aim of discovering anomalies. Verification testing is concerned with establishing existing defects in a program`
  },
  {
    question: `State machine diagram shows`,
    answers: [
      { text: `system functions`, correct: false },
      { text: `system response to internal events`, correct: true },
      { text: `system response to external events`, correct: true },
      { text: `interactions between objects in the system`, correct: false },
      { text: `data structures`, correct: false },
      { text: `interactions between actors and the system`, correct: false },
      { text: `data flow in the system`, correct: false }
    ],
    explanation: `Internal or External Events trigger some activity that changes the state of the system and some of its parts`
  },
  {
    question: `Agile methods in software development imply`,
    answers: [
      { text: `Incremental delivery`, correct: true },
      { text: `Customer involvement during development process`, correct: true },
      { text: `Establishing normative processes for team working`, correct: false },
      { text: `Periodic activities to eliminate complexity from the system`, correct: true },
      { text: `Modeling the whole software before writting the code`, correct: false }
    ],
    explanation: `The software is developed incrementally, with feedback at each increment. THe customer should be closely involved, Simplicity in both the software and the development process`
  },
  {
    question: `Select the cases in which only concepts are reused:`,
    answers: [
      { text: `Software services`, correct: false },
      { text: `Design patterns`, correct: true },
      { text: `Program libraries`, correct: false },
      { text: `Architectural patterns`, correct: true }
    ],
    explanation: `Reuse is possible at a range of abstraction levels, from concrete entities(functions, classes) to concepts.`
  },
  //5
  {
    question: `Consider the following class diagram, <br/> <img src="img/se1.png"> <br/> Check the true statements?`,
    answers: [
      { text: `An object of type ComputeScience contains a collection of objects of type Student.`, correct: true },
      { text: `Class Questionnaire has a public attribute of type String.`, correct: false },
      { text: `Class ComputerScience has a public operation addStudent(s:Student).`, correct: true },
      { text: `Class ComputerScience has a private operation setSchedule(s:String).`, correct: false },
      { text: `Class Tutor is superclass for the class Masterand`, correct: true },
      { text: `Class ComputerScience defines a composition of objects of type Questionnaire.`, correct: true },
      { text: `A unidirectional association exists between class ComputerScience and class Tutor`, correct: false },
      { text: `Class ComputerScience inherits interface Specialization.`, correct: false },
      { text: `Class Tutor defines an aggregate of objects of type Masterand`, correct: false }
    ],
    explanation: `<img src="img/se2.png">`
  },
  {
    question: `Consider the following class diagram. <img src="img/se3.png"> Which sequence of Java code correctly and completely describes the relations of class Proiect?`,
    answers: [
      { text: `class Proiect extends Student { <br/>
        private Vector <DiagramaUML> diagramele = new Vector();<br/>
        private CodSursa codul;...}`, correct: false },
      { text: `class Proiect { <br/>
        private Vector <Student> studenti;<br/>
        private Vector <DiagramaUML> diagramele = new Vector();private CodSursa codul;...}`, correct: true },
      { text: `class Proiect { <br/>
        private Student student;<br/>
        private DiagramaUML diagrama;private CodSursa codul;...}`, correct: false },
      { text: `class Proiect { <br/>
        private Vector <Student> studenti = new Vector();<br/>
        private Vector <DiagramaUML> diagramele;private CodSursa codul;...}`, correct: false }
    ],
    explanation: `<img src="img/se2.png">`
  },
  {
    question: `Consider the following class diagram. <img src="img/se4.png"> Which sequence of Java code correctly and completely describes the relations of class Revista?`,
    answers: [
      { text: `class Revista extends RevistaOnLine implements Produs { <br/>
        private Vector <Articol> articole;...}`, correct: false },
      { text: `class Revista implements Produs {<br/>
        private Vector <Articol> articole = new Vector();<br/>
        private RevistaOnLine revista;...}`, correct: false },
      { text: `class Revista implements Produs { <br/>
        pprivate Vector <Articol> articole = new Vector();...}`, correct: true },
      { text: `class Revista extends RevistaOnLine { <br/>
        private Vector <Articol> articole = new Vector();<br/>
        private Produs produs;...}`, correct: false }
    ],
    explanation: `The relation between Revista and produs denotes implementation, The Revista and Articol composition`
  },
  {
    question: `Consider the following class diagram.  <img src="img/se5.png"> Check the complete and correct description of the relations represented on the diagram:`,
    answers: [
      { text: `Bidirectional association between classes Proiect and CodSursa; composition between classes
      Proiect (composite) and DiagramaUML (component); aggregation between classes Proiect
      (aggregate) and Student (component); generalization between interface IStudent (implemented) and class Student (implements); realization between classes Student (superclass)
      and class Bursier( subclass).`, correct: false },
      { text: `Bidirectional association between classes Proiect and CodSursa; composition between classes
      Proiect (composite) and DiagramaUML (component); aggregation between classes Proiect
      (aggregate) and Student (component); realization between interface IStudent (implemented)
      and class Student (implements); generalization between classes Student (superclass) and
      class Bursier (subclass).`, correct: true },
      { text: `Bidirectional association between classes Proiect and CodSursa; aggregation between classes
      Proiect (aggregate) and DiagramaUML (component); composition between classes Proiect
      (composite) and Student (component); generalization between interface IStudent (implemented) and class Student (implements); realization between classes Student (superclass)
      and class Bursier (subclass).`, correct: false },
      { text: `Bidirectional association between classes Proiect and CodSursa; composition between classes
      DiagramaUML (composite) and Proiect (component); aggregation between classes Student
      (aggregate) and Proiect (component); realization between interface IStudent (implemented)
      and class Student (implements); generalization between classes Student (superclass) and
      class Bursier (subclass)`, correct: true }
    ],
    explanation: `<img src="img/se2.png">`
  },
  {
    question: `Consider the following class diagram <img src="img/se6.png"> Which sequence of Java code correctly describes the relationship between classes Student and
Proiect?`,
    answers: [
      { text: `<img src="img/se7.png">`, correct: false },
      { text: `<img src="img/se8.png">`, correct: false },
      { text: `<img src="img/se9.png">`, correct: true },
      { text: `<img src="img/se10.png">`, correct: false },
      { text: `<img src="img/se11.png">`, correct: false },
    ],
    explanation: `<img src="img/se2.png">`
  },
  //10
  {
    question: `Consider the following sequence diagram. <img src="img/se12.png"> Which operations of class ControlerInscriere result from it?`,
    answers: [
      { text: `getCursuri()`, correct: true },
      { text: `display(listaCursuriOferite)`, correct: false },
      { text: `inscriere(student, listaCursuriSelectate)`, correct: true },
      { text: `Plan(listaCursuriSelectate)`, correct: false },
      { text: `addPlan(planCurent)`, correct: false },
      { text: `displayMsg(”OK”)`, correct: false }
    ],
    explanation: `TBD`
  },
  {
    question: `Consider the following sequence diagram. <img src="img/se13.png"> Which operations of class ControlerInscriere result from it?`,
    answers: [
      { text: `InscriereForm`, correct: true },
      { text: `ControlerInscriere`, correct: false },
      { text: `listaCursuriSelectate`, correct: true },
      { text: `curent`, correct: false },
      { text: `Student`, correct: false },
      { text: `Plan`, correct: false },
      { text: `planCurent`, correct: false }
    ],
    explanation: `TBD`
  },
  {
    question: `Consider the following robustness diagram. <img src="img/se14D.png"> Which statements are true?`,
    answers: [
      { text: `Home page is a boundary object.`, correct: true },
      { text: `ExtrageListaCarti can be a persistent object.`, correct: true },
      { text: `AfiseazaLinkuri is an object for interfacing with the system.`, correct: false },
      { text: `ExtrageListaCarti could be implemented as a method of an entity class`, correct: false },
      { text: `ExtrageListaCarti can be a persistent object`, correct: true },
      { text: `ListaCarti is an object for interfacing with the system`, correct: true },
      { text: `Catalog is an entity object.`, correct: false }
    
    ],
    explanation: ``
  },
]

const Databases = [
  {
    question: `Which of the following are properties of a candidate key?`,
    answers: [
      { text: `Uniqueness`, correct: true },
      { text: `Irreducibility`, correct: true },
      { text: `Completeness`, correct: false },
      { text: `Domain segregation`, correct: false }
    ],
    explanation: `It must contain unique values. Candidate key may have multiple attributes. Must not contain null values. contain minimum fields to ensure uniqueness. Uniquely identify each record in the table`
  },
  {
    question: `What is the role of the system catalog?`,
    answers: [
      { text: `Describes the operations of the DBMS`, correct: false },
      { text: `Describes the data in the database`, correct: true },
      { text: `Audits the operations performed on the data`, correct: false },
      { text: `Includes information about the database objects, such as users and their permissions`, correct: true }
    ],
    explanation: `TBD`
  },
  {
    question: `Given the relation R(A) with two tuples in it {(1), (2)} and the following two transactions (T1) UPDATE R SET A = A*2;(T2) SELECT AVG(A) FROM R; SELECT MAX(A) FROM R; If T2 is executed under repeatable read isolation level, which statements are true?`,
    answers: [
      { text: `IF AVG(A) = 1.5 then MAX(A) equals to 2 or 4`, correct: false },
      { text: `AVG(A) = 1.5 and MAX(A) = 2 , always`, correct: false },
      { text: `Possible values for AVG(A) are 1.5 or 3, and possible values for MAX(A) are 2 or 4`, correct: true },
      { text: `If MAX(A) = 4 then AVG(A) = 1.5`, correct: false }
    ],
    explanation: `T1 takes place, after that T2 and the max and avg of A are 2 and 1.5 and 2. After T2 the cycle repeats and the values are max 3, avg 4`
  },
  {
    question: `Which of the following are issues addressed by normalization?`,
    answers: [
      { text: `Deletion anomalies`, correct: true },
      { text: `Insertion anomalies`, correct: true },
      { text: `Modification anomalies`, correct: true },
      { text: `Data redundancy`, correct: true },
      { text: `Data volume`, correct: false }
    ],
    explanation: `<img src="img/db1.png"> `
  },
  //5
  {
    question: `Three of the following four expressions finds the names of all students who did not apply to major
    in CS or PH. Which one finds something different? (Hint: You should not assume student names
    are unique.)`,
    answers: [
      { text: `<img src="img/db2.png">`, correct: false },
      { text: `<img src="img/db3.png">`, correct: false },
      { text: `<img src="img/db4.png">`, correct: false },
      { text: `<img src="img/db5.png">`, correct: true }
    ],
    explanation: `because of the hint, the wrong option does not take into account the ID`
  },
  {
    question: `Consider the following query: <br/>
    SELECT * FROM Student, Apply, College<br/>
WHERE Student.sID = Apply.sID<br/>
AND Apply.cName = College.cName<br/>
AND Student.Bac > 5<br/>
AND College.cName = ’UVT’<br/>
Suppose we can create two indexes, and assume all indexes are tree-based. Which two indexes do
you think would be most useful for speeding up query execution?`,
    answers: [
      { text: `Student.sID and Student.Bac`, correct: false },
      { text: `Apply.cName and College.cName`, correct: false },
      { text: `Apply.sID and College.cName`, correct: true },
      { text: `Apply.sID and Student.Bac`, correct: false }
    ],
    explanation: `College.cName appears more than once, and Apply.sId appears at least once in different comparison, thus avoiding a comparison of values from the same index.`
  },
  {
    question: `What is the result returned by the following SQL query?<br/>
    SELECT b.Name<br/>
FROM Employee a, Employee b, SalaryLevel c, SalaryLevel d<br/>
WHERE a.ManagerId = b.Id<br/>
AND b.Salary BETWEEN c.MinSalary AND c.MaxSalary<br/>
AND b.Salary*1.25 BETWEEN d.MinSalary AND d.MaxSalary<br/>
AND c.Level+1 = d.Level`,
    answers: [
      { text: `Returns employees’ names who would move to the next salary level after a 25% wage increase`, correct: false },
      { text: `Returns managers’ names who would move to the next salary level after a 25% wage increase`, correct: true },
      { text: `Returns the employees who would move to the next salary level after a 25% wage increase if
      their salary is between the minimum and maximum wage`, correct: false },
      { text: `None of the above`, correct: false }
    ],
    explanation: `simulates a 25% increase in the sallary, and checks if the salary incease will change salary level`
  },
  {
    question: `Materialized views have the following advantages:`,
    answers: [
      { text: `help implementing business constraints`, correct: false },
      { text: `modularize the access to underlying tables`, correct: true },
      { text: `help implementing controlled access to the data`, correct: true },
      { text: `improves query execution performance`, correct: true }
    ],
    explanation: `TBD`
  },
  {
    question: `The table below contains a representative data sample for all the functional dependencies in a
    real-life data set. Which are the functional dependencies that hold for the data below? <img src="img/db6.png">`,
    answers: [
      { text: `A → {B, C}, E → {F}`, correct: true },
      { text: `D → {A, B, C, E, F}, F → {E}`, correct: false },
      { text: `{A, E} → {D}`, correct: true },
      { text: `{D, E} → {A, B}`, correct: false }
    ],
    explanation: `one includes a two times, and the other needlessly makes a dependant on {D,E}`
  },
  {
    question: `Considering the relation R(A, B, C, D, E, F) with attributes and functional dependencies from
    the previous question, which of the following attributes set are candidate keys in R? <img src="img/db6.png">`,
    answers: [
      { text: `{B, F}`, correct: false },
      { text: `{A, E}`, correct: true },
      { text: `{A, E, D}`, correct: false },
      { text: `{A}`, correct: false }
    ],
    explanation: `TBD`
  },
  {
    question: `Given R defined in the previous question, which of the below statements are false? <img src="img/db6.png">`,
    answers: [
      { text: `The relation R is in the first normal form`, correct: false },
      { text: `The relation R is in the second normal form`, correct: true },
      { text: `In the relation R the values in column B determines the values in column A`, correct: true },
      { text: `The relation R can not contain two tuples with different values in column D when the values
      in column A match.`, correct: true },
      { text: `Column A may accept NULL as valid values`, correct: false }
    ],
    explanation: `TBD`
  },
  {
    question: `Consider the relation R(A, B, C, D, E) with the following functional dependencies: D → C, {C, E} →
    A, D → A, {A, E} → D. Which of the following attribute sets is a superkey of R?
    `,
    answers: [
      { text: `{C, D}`, correct: false },
      { text: `{A, C}`, correct: false },
      { text: `{A, C, E}`, correct: false },
      { text: `{A, B, E}`, correct: true }
    ],
    explanation: `TBD`
  },
  {
    question: `There are rules that govern the process of translating an E/R diagram to a relational model.
    Which of the following are not such rules?`,
    answers: [
      { text: `a relationship between two Entity Sets maps to an additional attribute / column in one of
      them`, correct: true },
      { text: `a Weak Entity becomes a table where the PK from the connected Entity Set becomes foreign
      key`, correct: false },
      { text: `inheritance becomes tables`, correct: true },
      { text: `an Entity Set is mapped to a table`, correct: false }
    ],
    explanation: `TBD`
  },
]

const ComputerArchitectureQuestions = [
  {
    question: `By translation,`,
    answers: [
      { text: `a program P that written for a high-level machine M is transformed by a translator into a
      program P1 that can then be executed on a lower level of that machine, without further need
      for P,`, correct: false },
      { text: `each instruction of a program P written for a high-level machine M is transformed into a
      sequence of instructions for a lower level of that machine, then immediately executed, before
      the same process is applied to the next instruction from P,`, correct: false },
      { text: `a program P that is written for a high-level virtual machine V M is transformed into a
      program P1 which can be executed on a physical machine M.`, correct: true },
    ],
    explanation: `<img src="img/ca1.png"> `
  },
  {
    question: `The data path is defined as:`,
    answers: [
      { text: `the connection between input-output devices and the processor`, correct: false },
      { text: `the representation of data types in the memory of a computing system`, correct: false },
      { text: `the connection trough buses between registers arithmetic-logical unit and back to registers,
      used for instruction execution`, correct: true },
      { text: `networks interconnecting computing systems (like the Internet)`, correct: false }
    ],
    explanation: `<img src="img/ca2.png">`
  },
  {
    question: `The program counter:`,
    answers: [
      { text: `is a global variable in a program that is used to count the number of instructions executed,
      and measure program complexity,`, correct: false },
      { text: `is a register that holds an address to the next instruction that has to be executed,`, correct: true },
      { text: `is a register that holds the instruction that is being executed in a processor,`, correct: false },
      { text: `is an operating system variable that counts the number of processes in execution at a given
      time`, correct: false }
    ],
    explanation: `<img src="img/ca3.png">`
  },
  {
    question: `Microprogramming is`,
    answers: [
      { text: `the activity of writing programs that run on microprocessors,`, correct: false },
      { text: `the use of a set of instructions (microinstructions), stored in a memory, that are used to
      control the data path, for the purpose of executing instructions in one or several data path
      cycles,`, correct: true },
      { text: `the interaction with input/output devices by issuing commands to controllers (e.g commands
        for the hard drive controller to read a word from an address),`, correct: false },
      { text: `automated generation of small programs for embedded devices.`, correct: false }
    ],
    explanation: `<img src="img/ca4.png">`
  },
  //5
  {
    question: `A kilobyte is`,
    answers: [
      { text: `1000 bits`, correct: false },
      { text: `1024 bytes`, correct: true },
      { text: `2<sup>13</sup> bits`, correct: true },
    ],
    explanation: `one kilobyte is 1024 bytes. a byte has 8 bits, 8192 bits (2<sup>13</sup>)`
  },
  {
    question: `A typical use for a demultiplexer circuit is the implementation of`,
    answers: [
      { text: `a 1 bit full adder circuit`, correct: false },
      { text: `a serial-to-parallel convertor`, correct: true },
      { text: `a parallel-to-serial convertor`, correct: false },
      { text: `an integer multiplication circuit`, correct: false }
    ],
    explanation: `<img src="img/ca5.png">`
  },
  {
    question: `For cache memories, the locality principle refers to:`,
    answers: [
      { text: `the fact that memory locations close to the previously used one are likely to be used in the
      near future,`, correct: true },
      { text: `the fact that memory locations that were accessed recently will likely be accessed again`, correct: true },
      { text: `the fact that memory locations that were accessed recently will likely be accessed again`, correct: false },
    ],
    explanation: `it refers to the tendency of a processor to access the same memory locations repetitively over a short period of time`
  },
  {
    question: `Which type of branch instruction causes most delay in a typical five stage pipeline`,
    answers: [
      { text: `unconditional branches`, correct: false },
      { text: `conditional branches`, correct: true },
      { text: `none of the branch prediction causes any delay in the pipeline`, correct: false },
      { text: `both types of branch prediction cause the same amount of delay, on average`, correct: false }
    ],
    explanation: `<img src="img/ca6.png">`
  },
  {
    question: `Which of the following are necessary to describe the Instruction Set Architecture level`,
    answers: [
      { text: `the memory model`, correct: true },
      { text: `the configuration of the cache`, correct: false },
      { text: `the configuration of registers`, correct: true },
      { text: `data types`, correct: true },
      { text: `instructions`, correct: true }
    ],
    explanation: `<img src="img/ca7.png">`
  },
  {
    question: `The result of the following addition 11110111
    +11110111 in 2’s complement representation on 8 bits is:`,
    answers: [
      { text: `11101110 and the result is correct,`, correct: true },
      { text: `11101110 but there is an overflow,`, correct: false },
      { text: `11101111 and the result is correct,`, correct: false },
      { text: `11101111 but there is an overflow.`, correct: false }
    ],
    explanation: `Not overflow because it's negative`
  },
  {
    question: `The sequence 3D800000 represents the following number in IEEE 754 single precision floating
    point representation:`,
    answers: [
      { text: `0.625`, correct: true },
      { text: `16.25`, correct: false },
      { text: `41`, correct: false },
      { text: `221`, correct: false }
    ],
    explanation: `Hex to binary, then https://www.youtube.com/watch?v=4DfXdJdaNYs`
  },
]

const OperatingSystemsQuestions = [
  {
    question: `What causes a running thread to change its state, from Running to Blocked?`,
    answers: [
      { text: `any I/O event in the system`, correct: true },
      { text: `starting a new process in the system`, correct: false },
      { text: `terminating the running process`, correct: false },
      { text: `any context switch that happens in the system`, correct: false }
    ],
    explanation: `A thread which is not allowed to continue remains in a blocked state. Let's say the thread is waiting for I/O, but never gets the resources, so it remains blocked`
  },
  {
    question: `When designing an operating system for smartphones and other mobile devices, you should`,
    answers: [
      { text: `use bigger page sizes and more states for processes`, correct: false },
      { text: `use smaller page sizes and less states for processes`, correct: true },
      { text: `allow apps to run without interruption from the system, for maximizing user interaction`, correct: false },
      { text: `erminate apps if they run for too long, to avoid starvation of other processes`, correct: false }
    ],
    explanation: `pro: reduces internal fragmentation, better with locality reference. con: bigger page table, more page faults, overhead read/write of pages`
  },
  {
    question: `It is required to use defragmentation in a file system in order to`,
    answers: [
      { text: `improve the speed of the context switching in the system`, correct: false },
      { text: `allow smaller seek times for mechanic drives`, correct: true },
      { text: `allow files to be read faster sequentially`, correct: true },
      { text: `reduce boot times for the operating system`, correct: true }
    ],
    explanation: `Defragmentation phisically organizes the contents of the mass storage device usrd to store files into the smallest number of contiguous regions(fragments, extents)`
  },
  {
    question: `Suppose process A has a burst of 5, and starts at moment 0. Process B has a burst of 20, and
    starts at moment 5. A new process C is created at moment 3, with a burst of 3. Which of the
    following is true?`,
    answers: [
      { text: `in FIFO scheduling, process B runs before process C`, correct: false },
      { text: `in SJF scheduling, process A finishes before C starts`, correct: false },
      { text: `in Round-Robin scheduling (queue = 3), the first process to execute after A is B`, correct: false },
      { text: `in SRTN (queue = 3), processes execute as follows: A, C, B, A, B`, correct: true }
    ],
    explanation: `Shortest remaining time first`
  },
  //5
  {
    question: `A 16-bit Von Neumann architecture has a page size of 4,096 bytes and 12 KB of RAM. Access to
    the pages of the system happen as follows: 5,15,15,5,10. Which of the following is true?`,
    answers: [
      { text: `there are 4 physical pages in the system`, correct: false },
      { text: `there are 3 physical pages in the system`, correct: true },
      { text: `there are 16 virtual pages in the system`, correct: true },
      { text: `the FIFO algorithm causes 2 page faults to be issued`, correct: false },
      { text: `in the FIFO algorithm, address 1782 belongs to the first virtual page`, correct: false }
    ],
    explanation: `2^16 bits(total virtual memory)/4096(page sizez) = 16(virtual pages). 12kb(ram size)/4(4096bytes page size) = 3(physical pages)`
  },
  {
    question: `Which of the following are true about memory management?`,
    answers: [
      { text: `smaller page sizes are favorable when accessing small memory data chunks`, correct: true },
      { text: `larger page sizes are favorable when accessing small memory data chunks`, correct: false },
      { text: `physical addresses usually have a significantly smaller range than virtual addresses`, correct: true },
      { text: `internal memory fragmentation can be resolved by the operating system`, correct: false },
      { text: `external memory fragmentation can be resolved by the operating system`, correct: true }
    ],
    explanation: `TBD`
  },
  {
    question: `Assume you have a browser tab open in Windows, Linux or MacOS X, where you are playing an
    YouTube video in 4K (UltraHD) resolution. Which of the following could be true?`,
    answers: [
      { text: `the browser tab’s associated thread is more CPU-bound than I/O-bound`, correct: true },
      { text: `the browser tab’s associated thread is more I/O-bound than CPU-bound`, correct: true },
      { text: `the operating system will not schedule any other processes until playback is complete`, correct: false },
      { text: `new processes that are trying to execute during playback are placed in a FIFO waiting queue`, correct: false },
      { text: `interrupts are not allowed during YouTube playback`, correct: false }
    ],
    explanation: `Depending if the CPU or the HDD is slower it can be one of the two.`
  },
  {
    question: `Assume you are using a Von Neumann system with a CPU that has multiple physical cores.
    Which of the following is true?`,
    answers: [
      { text: `true parallelism can never be achieved through the kernel scheduler, unless the operating
      system is Linux or MacOS X`, correct: false },
      { text: `true parallelism can never be achieved through the kernel scheduler, unless the operating
      system is Windows and RAM memory is limited to 4 GB
      `, correct: true },
      { text: `the kernel can implement true parallelism in a multi-core CPU only if there are no bus
      limitations`, correct: false },
      { text: `in an interactive system, a pre-emptive scheduling algorithm is required to ensure responsiveness`, correct: true }
    ],
    explanation: `TBD`
  },
  {
    question: `In a system with a single type of resources, processes A, B and C have a maximum requirement
    of 10, 20 and 30 resources of type R. An initial allocation is made, of 8, 18, and 28 resources is
    made for these three processes. Which of the following statements is true?`,
    answers: [
      { text: `the minimum number of resources required, so that the state of the system is considered still
      safe, is 6`, correct: false },
      { text: `the minimum number of resources required, so that the state of the system is considered still
      safe, is 2`, correct: true },
      { text: `if only 2 resources are available for an additional allocation, the entire system is in a deadlock`, correct: false },
      { text: `an additional allocation of 1 resource to process A will leave the system in a deadlock`, correct: true }
    ],
    explanation: `TBD`
  },
  {
    question: `You are asked to design a process scheduling mechanism which favors short processes that perform
    I/O activities, while retaining the system’s interactive requirement, so that the user experience is
    satisfactory. Which of the following is true?`,
    answers: [
      { text: `a preemptive scheduling mechanism is preferred for all interactive systems`, correct: false },
      { text: `a non-preemptive scheduling mechanism is preferred in a situation such as the above`, correct: false },
      { text: `starvation of high-burst processes is possible in certain scenarios`, correct: true },
      { text: `statistically, processes offer the best response times when using the optimum quantum value,
      instead of higher quantum values`, correct: true }
    ],
    explanation: `<img src="img/so1.png">`
  },
  
]

const ComputerNetworksQuestions = [
  {
    question: `A process socket local address is equal to:`,
    answers: [
      { text: `port number + IP address`, correct: true },
      { text: `IP address`, correct: false },
      { text: `port number`, correct: false },
      { text: `IP address + hostname + port number`, correct: false }
    ],
    explanation: `IP address is the address of the system in the Network. Port is the address of the service within the System. So IP address + Port defines address of the particular service on the particular system`
  },
  {
    question: `Network layer protocol that reports on the success or failure of data delivery`,
    answers: [
      { text: `IP`, correct: false },
      { text: `TCP`, correct: false },
      { text: `ARP`, correct: false },
      { text: `ICMP`, correct: true }
    ],
    explanation: `The Internet control Message Protocol is supporting protocol in the Internet protocol suite. Is is used by network devices, including routers, to send error messages and operational information,
    indicating success or failure when communicating with another IP address, for example, an error is indicated when a requested service is not available or that a host or router cound not be reached.`
  },
  {
    question: `Which of the following services use UDP?`,
    answers: [
      { text: `SMTP`, correct: false },
      { text: `SNMP`, correct: true },
      { text: `FTP`, correct: false },
      { text: `TFTP`, correct: true },
      { text: `DHCP`, correct: true },
      { text: `HTTP`, correct: false }
    ],
    explanation: `<img src="img/cn1.png"> `
  },
  {
    question: `Which of the following devices are layer 2 devices?`,
    answers: [
      { text: `bridge`, correct: true },
      { text: `repeater`, correct: false },
      { text: `router`, correct: false },
      { text: `switch`, correct: true },
      { text: `hub`, correct: false }
    ],
    explanation: `A layer 2 network device is a multiport device that uses hardware addresses, MAC addresses, to process and forward data at the data link layer(layer 2)`
  },
  {
    question: `Which of the following IP addresses fall into the CIDR block of 115.64.4.0/22? (Choose two.)`,
    answers: [
      { text: `115.64.8.32`, correct: false },
      { text: `115.64.6.255`, correct: true },
      { text: `115.64.8.30`, correct: false },
      { text: `115.64.5.128`, correct: true }
    ],
    explanation: `The netmask is 255.255.252.0 with the wildcard 0.0.3.255. The answers were between Min:115.64.4.1, Max:115.64.7.254 values.`
  },
  {
    question: `What is the network topology where each node is connected to the two nearest nodes so that the
    entire network forms a circle?`,
    answers: [
      { text: `bus`, correct: false },
      { text: `ring`, correct: true },
      { text: `star`, correct: false },
      { text: `bus-star`, correct: false }
    ],
    explanation: `In a ring topology, each node is connected to the two nearest nodes so that the entire network forms a circle. Data is transmitted in one direction around the ring.`
  },
]
