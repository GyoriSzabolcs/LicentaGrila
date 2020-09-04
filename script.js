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

const algorithmsAndDataStructures = document.getElementById('algorithms-and-data-structures-btn');
const ComputerNetworks = document.getElementById('computer-networks-btn');
const databases = document.getElementById('databases-btn');
const flat = document.getElementById('flat-btn');
const computerArchitecture = document.getElementById('computer-architecture-btn');
const logics = document.getElementById('logics-btn');
const operatingSystems = document.getElementById('operating-systems-btn');
const graphsAndCombinatorics = document.getElementById('graph-and-combinatorics-btn');
const softwareEngineering = document.getElementById('software-engineering-btn');

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

function startCL() {

  algorithmsAndDataStructures.classList.add('hide')
  ComputerNetworks.classList.add('hide')
  databases.classList.add('hide')
  flat.classList.add('hide')
  computerArchitecture.classList.add('hide')
  logics.classList.add('hide')
  operatingSystems.classList.add('hide')
  graphsAndCombinatorics.classList.add('hide')
  softwareEngineering.classList.add('hide')

  nextButton.classList.remove('hide')
  startButton.classList.add('hide')
  submitButton.classList.remove('hide')
  shuffledQuestions = ComputatuinalLogic.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function startGTC() {

  algorithmsAndDataStructures.classList.add('hide')
  ComputerNetworks.classList.add('hide')
  databases.classList.add('hide')
  flat.classList.add('hide')
  computerArchitecture.classList.add('hide')
  logics.classList.add('hide')
  operatingSystems.classList.add('hide')
  graphsAndCombinatorics.classList.add('hide')
  softwareEngineering.classList.add('hide')

  nextButton.classList.remove('hide')
  startButton.classList.add('hide')
  submitButton.classList.remove('hide')
  shuffledQuestions = GraphTheoryAndCombinatorics.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function startADS() {

  algorithmsAndDataStructures.classList.add('hide')
  ComputerNetworks.classList.add('hide')
  databases.classList.add('hide')
  flat.classList.add('hide')
  computerArchitecture.classList.add('hide')
  logics.classList.add('hide')
  operatingSystems.classList.add('hide')
  graphsAndCombinatorics.classList.add('hide')
  softwareEngineering.classList.add('hide')

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
      question: 'Which is the minimum weight spanning tree of the following connected graph? (hint: apply the Kruskal algoritm)\n <img src="img/gtc2.png" width="500" height="500">',
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
      question: 'Consider the predicate logic language that contains the following symbols \n'
      + `variables indicated with lower case letters\n`
      + `function symbols: + binary infix, - unary prefix, * binary infix\n`
      + `predicate symbols: =,<,<= all binary, infix\n`,
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
      explanation: ``
    },
]