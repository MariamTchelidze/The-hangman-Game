/* --- სიტყვების კოლექცია --- */
const ARCHIVED_WORDS = [
  {
    word: "თბილისი",
    topic: "geography",
    difficulty: "easy",
    hint: "საქართველოს დედაქალაქია."
  },
  {
    word: "კავკასიონი",
    topic: "geography",
    difficulty: "medium",
    hint: "მთათა სისტემა საქართველოს ჩრდილოეთით."
  },
  {
    word: "არქიპელაგი",
    topic: "geography",
    difficulty: "hard",
    hint: "ერთმანეთთან ახლოს მდებარე კუნძულების ჯგუფი."
  },
  {
    word: "კოორდინატები",
    topic: "geography",
    difficulty: "epic",
    hint: "მათი დახმარებით რუკაზე ზუსტ ადგილს ვპოულობთ."
  },
  {
    word: "მეფე",
    topic: "history",
    difficulty: "easy",
    hint: "სახელმწიფოს მმართველის ძველი წოდება."
  },
  {
    word: "კოლხეთი",
    topic: "history",
    difficulty: "medium",
    hint: "უძველესი ქართული სამეფო დასავლეთ საქართველოში."
  },
  {
    word: "დიდგორი",
    topic: "history",
    difficulty: "hard",
    hint: "აქ ქართველებმა 1121 წელს დიდი ბრძოლა მოიგეს."
  },
  {
    word: "აღმაშენებელი",
    topic: "history",
    difficulty: "epic",
    hint: "დავით მეოთხის ყველაზე ცნობილი ზედწოდება."
  },
  {
    word: "ჯამი",
    topic: "math",
    difficulty: "easy",
    hint: "შეკრების მოქმედებით მიღებული პასუხი."
  },
  {
    word: "სამკუთხედი",
    topic: "math",
    difficulty: "medium",
    hint: "გეომეტრიული ფიგურა სამი გვერდით."
  },
  {
    word: "განტოლება",
    topic: "math",
    difficulty: "hard",
    hint: "ტოლობა, რომელშიც უცნობი სიდიდე გვხვდება."
  },
  {
    word: "ლოგარითმი",
    topic: "math",
    difficulty: "epic",
    hint: "მაჩვენებელი, რომელშიც ფუძე უნდა ავიყვანოთ რიცხვის მისაღებად."
  },
  {
    word: "ტყე",
    topic: "nature",
    difficulty: "easy",
    hint: "ადგილი, სადაც ბევრი ხე ერთად იზრდება."
  },
  {
    word: "ჩანჩქერი",
    topic: "nature",
    difficulty: "medium",
    hint: "მაღლიდან ვარდნილი წყლის ნაკადი."
  },
  {
    word: "ეკოსისტემა",
    topic: "nature",
    difficulty: "hard",
    hint: "ცოცხალი ორგანიზმებისა და გარემოს ერთიანი სისტემა."
  },
  {
    word: "ბიომრავალფეროვნება",
    topic: "nature",
    difficulty: "epic",
    hint: "ბუნებაში სიცოცხლის ფორმების მრავალგვარობა."
  },
  {
    word: "ატომი",
    topic: "science",
    difficulty: "easy",
    hint: "ნივთიერების უმცირესი ნაწილაკი."
  },
  {
    word: "გრავიტაცია",
    topic: "science",
    difficulty: "medium",
    hint: "ძალა, რომელიც საგნებს დედამიწისკენ იზიდავს."
  },
  {
    word: "ფოტოსინთეზი",
    topic: "science",
    difficulty: "hard",
    hint: "პროცესი, რომლითაც მცენარე სინათლეს საკვებად გარდაქმნის."
  },
  {
    word: "ელექტრომაგნიტიზმი",
    topic: "science",
    difficulty: "epic",
    hint: "ფიზიკის დარგი, რომელიც ელექტრულ და მაგნიტურ მოვლენებს აერთიანებს."
  },
  {
    word: "ცეკვა",
    topic: "culture",
    difficulty: "easy",
    hint: "მუსიკის რიტმზე შესრულებული მოძრაობა."
  },
  {
    word: "ფანდური",
    topic: "culture",
    difficulty: "medium",
    hint: "ქართული სიმებიანი საკრავი."
  },
  {
    word: "ვეფხისტყაოსანი",
    topic: "culture",
    difficulty: "hard",
    hint: "შოთა რუსთაველის უკვდავი პოემა."
  },
  {
    word: "მრავალჟამიერი",
    topic: "culture",
    difficulty: "epic",
    hint: "ცნობილი ქართული მრავალხმიანი საგალობელი."
  },
  {
    word: "ბათუმი",
    topic: "geography",
    difficulty: "easy",
    hint: "საქართველოს შავი ზღვისპირა ქალაქი."
  },
  {
    word: "ალაზანი",
    topic: "geography",
    difficulty: "medium",
    hint: "მდინარე, რომელიც კახეთის ველს მიუყვება."
  },
  {
    word: "მყინვარწვერი",
    topic: "geography",
    difficulty: "hard",
    hint: "საქართველოს ერთ-ერთი ყველაზე ცნობილი მწვერვალი."
  },
  {
    word: "კონტინენტი",
    topic: "geography",
    difficulty: "epic",
    hint: "დედამიწის ზედაპირის ძალიან დიდი ხმელეთის ნაწილი."
  },
  {
    word: "ციხე",
    topic: "history",
    difficulty: "easy",
    hint: "მტრისგან თავდასაცავად აგებული სიმაგრე."
  },
  {
    word: "იბერია",
    topic: "history",
    difficulty: "medium",
    hint: "ქართლის სამეფოს ძველი სახელწოდება."
  },
  {
    word: "ბაგრატიონი",
    topic: "history",
    difficulty: "hard",
    hint: "საქართველოს სამეფო დინასტიის გვარი."
  },
  {
    word: "დამოუკიდებლობა",
    topic: "history",
    difficulty: "epic",
    hint: "სახელმწიფოს თავისუფლება და სუვერენული მდგომარეობა."
  },
  {
    word: "რიცხვი",
    topic: "math",
    difficulty: "easy",
    hint: "მისი დახმარებით რაოდენობას გამოვხატავთ."
  },
  {
    word: "პერიმეტრი",
    topic: "math",
    difficulty: "medium",
    hint: "ფიგურის ყველა გვერდის სიგრძეთა ჯამი."
  },
  {
    word: "პროპორცია",
    topic: "math",
    difficulty: "hard",
    hint: "ორი შეფარდების ტოლობა."
  },
  {
    word: "ტრიგონომეტრია",
    topic: "math",
    difficulty: "epic",
    hint: "მათემატიკის დარგი, რომელიც სამკუთხედებს სწავლობს."
  },
  {
    word: "მდინარე",
    topic: "nature",
    difficulty: "easy",
    hint: "წყლის ბუნებრივი ნაკადი, რომელიც კალაპოტში მიედინება."
  },
  {
    word: "ცისარტყელა",
    topic: "nature",
    difficulty: "medium",
    hint: "ფერადი რკალი, რომელიც წვიმის შემდეგ ჩნდება."
  },
  {
    word: "მყინვარი",
    topic: "nature",
    difficulty: "hard",
    hint: "მთაში ან პოლუსზე წარმოქმნილი ყინულის დიდი მასა."
  },
  {
    word: "ბუნებათსარგებლობა",
    topic: "nature",
    difficulty: "epic",
    hint: "ადამიანის მიერ ბუნებრივი რესურსების გამოყენება."
  },
  {
    word: "ვარსკვლავი",
    topic: "science",
    difficulty: "easy",
    hint: "ცხელი აირის მანათობელი ციური სხეული."
  },
  {
    word: "ენერგია",
    topic: "science",
    difficulty: "medium",
    hint: "მუშაობის შესრულების უნარი."
  },
  {
    word: "ევოლუცია",
    topic: "science",
    difficulty: "hard",
    hint: "ცოცხალი ორგანიზმების თანდათანობითი ცვლილების პროცესი."
  },
  {
    word: "თერმოდინამიკა",
    topic: "science",
    difficulty: "epic",
    hint: "ფიზიკის დარგი, რომელიც სითბოსა და ენერგიას სწავლობს."
  },
  {
    word: "სიმღერა",
    topic: "culture",
    difficulty: "easy",
    hint: "სიტყვებისა და მელოდიის ერთობლიობა."
  },
  {
    word: "ჩონგური",
    topic: "culture",
    difficulty: "medium",
    hint: "დასავლეთ საქართველოში გავრცელებული სიმებიანი საკრავი."
  },
  {
    word: "ალავერდობა",
    topic: "culture",
    difficulty: "hard",
    hint: "ტრადიციული ქართული დღესასწაული კახეთში."
  },
  {
    word: "სტუმარმასპინძლობა",
    topic: "culture",
    difficulty: "epic",
    hint: "სტუმრის გულთბილად მიღების ქართული ტრადიცია."
  },
  {
    word: "HTML",
    topic: "technology",
    difficulty: "easy",
    hint: "რომელი მარკირების ენა ქმნის ვებგვერდის სტრუქტურას?"
  },
  {
    word: "CSS",
    topic: "technology",
    difficulty: "easy",
    hint: "რომელი ენა განსაზღვრავს ვებგვერდის ვიზუალურ სტილს?"
  },
  {
    word: "TAG",
    topic: "technology",
    difficulty: "easy",
    hint: "რა ეწოდება HTML-ის ელემენტის აღმნიშვნელ ჩანაწერს?"
  },
  {
    word: "SELECTOR",
    topic: "technology",
    difficulty: "easy",
    hint: "CSS-ში რა ირჩევს გასაფორმებელ HTML ელემენტს?"
  },
  {
    word: "SCSS",
    topic: "technology",
    difficulty: "easy",
    hint: "რომელი Sass სინტაქსი ჰგავს ჩვეულებრივ CSS-ს?"
  },
  {
    word: "MIXIN",
    topic: "technology",
    difficulty: "medium",
    hint: "SCSS-ში რა ინახავს მრავალჯერ გამოსაყენებელ სტილების ჯგუფს?"
  },
  {
    word: "NESTING",
    topic: "technology",
    difficulty: "medium",
    hint: "რა ეწოდება SCSS-ში სელექტორების ერთმანეთში ჩაშენებას?"
  },
  {
    word: "PARTIAL",
    topic: "technology",
    difficulty: "medium",
    hint: "რა ეწოდება SCSS ფაილს, რომლის სახელი ქვედა ტირეთი იწყება?"
  },
  {
    word: "BRANCH",
    topic: "technology",
    difficulty: "medium",
    hint: "Git-ში რა ქმნის სამუშაოს დამოუკიდებელ მიმართულებას?"
  },
  {
    word: "COMMIT",
    topic: "technology",
    difficulty: "medium",
    hint: "Git-ში რა ინახავს ცვლილებების კონკრეტულ მდგომარეობას?"
  },
  {
    word: "GITHUB",
    topic: "technology",
    difficulty: "medium",
    hint: "რომელ პლატფორმაზე ინახავენ და აზიარებენ Git რეპოზიტორიებს?"
  },
  {
    word: "MERGE",
    topic: "technology",
    difficulty: "medium",
    hint: "Git-ის რომელი მოქმედება აერთიანებს ორი branch-ის ცვლილებებს?"
  },
  {
    word: "VARIABLE",
    topic: "technology",
    difficulty: "hard",
    hint: "JavaScript-ში რა ინახავს მნიშვნელობას სახელის ქვეშ?"
  },
  {
    word: "FUNCTION",
    topic: "technology",
    difficulty: "hard",
    hint: "რა ეწოდება მრავალჯერ გამოსაყენებელ კოდის ბლოკს?"
  },
  {
    word: "ARRAY",
    topic: "technology",
    difficulty: "hard",
    hint: "რომელი მონაცემთა სტრუქტურა ინახავს დალაგებულ მნიშვნელობებს?"
  },
  {
    word: "OBJECT",
    topic: "technology",
    difficulty: "hard",
    hint: "რა ინახავს მონაცემებს key-value წყვილების სახით?"
  },
  {
    word: "CALLBACK",
    topic: "technology",
    difficulty: "hard",
    hint: "რა ეწოდება სხვა ფუნქციისთვის არგუმენტად გადაცემულ ფუნქციას?"
  },
  {
    word: "EVENT",
    topic: "technology",
    difficulty: "hard",
    hint: "რა ეწოდება ბრაუზერში click-ის ან keydown-ის მსგავს მოქმედებას?"
  },
  {
    word: "METHOD",
    topic: "technology",
    difficulty: "hard",
    hint: "რა ეწოდება ფუნქციას, რომელიც ობიექტის თვისებაა?"
  },
  {
    word: "DOM",
    topic: "technology",
    difficulty: "hard",
    hint: "რომელი მოდელი წარმოადგენს HTML დოკუმენტს ობიექტების ხედ?"
  },
  {
    word: "CLOSURE",
    topic: "technology",
    difficulty: "epic",
    hint: "რა აძლევს ფუნქციას გარე scope-ის ცვლადებზე წვდომის შენარჩუნების საშუალებას?"
  },
  {
    word: "PROTOTYPE",
    topic: "technology",
    difficulty: "epic",
    hint: "JavaScript-ის რომელი მექანიზმი გამოიყენება მემკვიდრეობისთვის?"
  },
  {
    word: "PROMISE",
    topic: "technology",
    difficulty: "epic",
    hint: "რომელი ობიექტი წარმოადგენს ასინქრონული ოპერაციის მომავალ შედეგს?"
  },
  {
    word: "ASYNC",
    topic: "technology",
    difficulty: "epic",
    hint: "რომელი keyword განსაზღვრავს ფუნქციას, რომელიც ყოველთვის Promise-ს აბრუნებს?"
  },
  {
    word: "GENERATOR",
    topic: "technology",
    difficulty: "epic",
    hint: "რა ეწოდება ფუნქციას, რომელსაც შესრულების შეჩერება და გაგრძელება შეუძლია?"
  },
  {
    word: "EVENT LOOP",
    topic: "technology",
    difficulty: "epic",
    hint: "რომელი მექანიზმი მართავს JavaScript-ის ასინქრონული დავალებების შესრულებას?"
  },
  {
    word: "HOISTING",
    topic: "technology",
    difficulty: "epic",
    hint: "რა ეწოდება დეკლარაციების scope-ის დასაწყისში დამუშავების ქცევას?"
  },
  {
    word: "CURRYING",
    topic: "technology",
    difficulty: "epic",
    hint: "რა გარდაქმნის მრავალარგუმენტიან ფუნქციას ერთარგუმენტიანი ფუნქციების ჯაჭვად?"
  }
];

const WORDS = [
  {
    word: "HTML",
    track: "html",
    difficulty: "easy",
    hintKa: "რომელი მარკირების ენა ქმნის ვებგვერდის სტრუქტურას?",
    hintEn: "Which markup language creates the structure of a web page?"
  },
  {
    word: "TAG",
    track: "html",
    difficulty: "easy",
    hintKa: "რა ეწოდება კუთხოვან ფრჩხილებში ჩაწერილ HTML აღმნიშვნელს?",
    hintEn: "What is an HTML marker written inside angle brackets called?"
  },
  {
    word: "ELEMENT",
    track: "html",
    difficulty: "medium",
    hintKa: "რა ეწოდება HTML-ის სრულ ერთეულს გამხსნელი და დამხურავი tag-ებით?",
    hintEn: "What is a complete HTML unit with opening and closing tags called?"
  },
  {
    word: "ATTRIBUTE",
    track: "html",
    difficulty: "medium",
    hintKa: "რა ამატებს HTML element-ს დამატებით ინფორმაციას?",
    hintEn: "What adds extra information to an HTML element?"
  },
  {
    word: "SEMANTIC",
    track: "html",
    difficulty: "hard",
    hintKa: "რა ტიპის HTML tag აღწერს თავისი შინაარსის მნიშვნელობას?",
    hintEn: "What type of HTML tag describes the meaning of its content?"
  },
  {
    word: "ARIA",
    track: "html",
    difficulty: "hard",
    hintKa: "რომელი ატრიბუტების სისტემა აუმჯობესებს ვებგვერდის ხელმისაწვდომობას?",
    hintEn: "Which attribute system improves web accessibility?"
  },
  {
    word: "SHADOW DOM",
    track: "html",
    difficulty: "epic",
    hintKa: "რომელი DOM ტექნოლოგია იზოლირებს web component-ის სტრუქტურასა და სტილებს?",
    hintEn: "Which DOM technology isolates a web component's structure and styles?"
  },
  {
    word: "CUSTOM ELEMENT",
    track: "html",
    difficulty: "epic",
    hintKa: "რა ეწოდება დეველოპერის მიერ შექმნილ მრავალჯერად HTML element-ს?",
    hintEn: "What is a reusable HTML element defined by a developer called?"
  },
  {
    word: "CSS",
    track: "css",
    difficulty: "easy",
    hintKa: "რომელი ენა განსაზღვრავს ვებგვერდის ვიზუალურ სტილს?",
    hintEn: "Which language controls the visual style of a web page?"
  },
  {
    word: "COLOR",
    track: "css",
    difficulty: "easy",
    hintKa: "CSS-ის რომელი property ცვლის ტექსტის ფერს?",
    hintEn: "Which CSS property changes the text color?"
  },
  {
    word: "SELECTOR",
    track: "css",
    difficulty: "medium",
    hintKa: "რა ირჩევს HTML element-ებს, რომლებსაც CSS გააფორმებს?",
    hintEn: "What chooses the HTML elements that CSS will style?"
  },
  {
    word: "PADDING",
    track: "css",
    difficulty: "medium",
    hintKa: "რომელი property ქმნის სივრცეს content-სა და border-ს შორის?",
    hintEn: "Which property creates space between content and its border?"
  },
  {
    word: "SPECIFICITY",
    track: "css",
    difficulty: "hard",
    hintKa: "რა განსაზღვრავს, რომელი CSS selector-ის წესი გაიმარჯვებს?",
    hintEn: "What determines which competing CSS selector rule wins?"
  },
  {
    word: "PSEUDOCLASS",
    track: "css",
    difficulty: "hard",
    hintKa: "რა აღწერს element-ის განსაკუთრებულ მდგომარეობას, მაგალითად hover-ს?",
    hintEn: "What describes a special element state such as hover?"
  },
  {
    word: "CASCADE LAYER",
    track: "css",
    difficulty: "epic",
    hintKa: "რომელი თანამედროვე CSS feature მართავს სტილების პრიორიტეტულ ჯგუფებს?",
    hintEn: "Which modern CSS feature organizes style priority into named groups?"
  },
  {
    word: "CONTAINER QUERY",
    track: "css",
    difficulty: "epic",
    hintKa: "რა ცვლის component-ის სტილს მისი container-ის ზომის მიხედვით?",
    hintEn: "What changes a component's style based on the size of its container?"
  },
  {
    word: "SCSS",
    track: "scss",
    difficulty: "easy",
    hintKa: "რომელი Sass სინტაქსი ჰგავს ჩვეულებრივ CSS-ს?",
    hintEn: "Which Sass syntax looks similar to regular CSS?"
  },
  {
    word: "VARIABLE",
    track: "scss",
    difficulty: "easy",
    hintKa: "რა ინახავს SCSS-ში მრავალჯერ გამოსაყენებელ მნიშვნელობას?",
    hintEn: "What stores a reusable value in SCSS?"
  },
  {
    word: "NESTING",
    track: "scss",
    difficulty: "medium",
    hintKa: "რა ეწოდება SCSS-ში selector-ების ერთმანეთში ჩაშენებას?",
    hintEn: "What is placing selectors inside other selectors called in SCSS?"
  },
  {
    word: "PARTIAL",
    track: "scss",
    difficulty: "medium",
    hintKa: "რა ეწოდება SCSS ფაილს, რომლის სახელი ქვედა ტირეთი იწყება?",
    hintEn: "What is an SCSS file whose name begins with an underscore called?"
  },
  {
    word: "MIXIN",
    track: "scss",
    difficulty: "hard",
    hintKa: "რა ინახავს მრავალჯერ გამოსაყენებელ style-ების ჯგუფს SCSS-ში?",
    hintEn: "What stores a reusable group of styles in SCSS?"
  },
  {
    word: "EXTEND",
    track: "scss",
    difficulty: "hard",
    hintKa: "რომელი directive აზიარებინებს ერთ selector-ს მეორის style-ებს?",
    hintEn: "Which directive lets one selector inherit another selector's styles?"
  },
  {
    word: "INTERPOLATION",
    track: "scss",
    difficulty: "epic",
    hintKa: "რა სვამს SCSS expression-ის მნიშვნელობას selector-ში ან property-ის სახელში?",
    hintEn: "What inserts an SCSS expression into a selector or property name?"
  },
  {
    word: "PLACEHOLDER",
    track: "scss",
    difficulty: "epic",
    hintKa: "რა ეწოდება %-ით დაწყებულ SCSS selector-ს, რომელიც მხოლოდ extend-ისთვის არსებობს?",
    hintEn: "What is an SCSS selector beginning with % and intended only for extend called?"
  },
  {
    word: "ARRAY",
    track: "javascript",
    difficulty: "easy",
    hintKa: "რომელი JavaScript სტრუქტურა ინახავს დალაგებულ მნიშვნელობებს?",
    hintEn: "Which JavaScript structure stores an ordered list of values?"
  },
  {
    word: "OBJECT",
    track: "javascript",
    difficulty: "easy",
    hintKa: "რა ინახავს JavaScript მონაცემებს key-value წყვილების სახით?",
    hintEn: "What stores JavaScript data as key-value pairs?"
  },
  {
    word: "FUNCTION",
    track: "javascript",
    difficulty: "medium",
    hintKa: "რა ეწოდება მრავალჯერ გამოსაყენებელ JavaScript კოდის ბლოკს?",
    hintEn: "What is a reusable block of JavaScript code called?"
  },
  {
    word: "CALLBACK",
    track: "javascript",
    difficulty: "medium",
    hintKa: "რა ეწოდება სხვა function-ისთვის argument-ად გადაცემულ function-ს?",
    hintEn: "What is a function passed to another function as an argument called?"
  },
  {
    word: "CLOSURE",
    track: "javascript",
    difficulty: "hard",
    hintKa: "რა უნარჩუნებს function-ს გარე scope-ის variable-ებზე წვდომას?",
    hintEn: "What lets a function retain access to variables from its outer scope?"
  },
  {
    word: "PROMISE",
    track: "javascript",
    difficulty: "hard",
    hintKa: "რომელი object წარმოადგენს asynchronous operation-ის მომავალ შედეგს?",
    hintEn: "Which object represents the future result of an asynchronous operation?"
  },
  {
    word: "PROTOTYPE",
    track: "javascript",
    difficulty: "epic",
    hintKa: "JavaScript-ის რომელი მექანიზმი უზრუნველყოფს object-ებს შორის inheritance-ს?",
    hintEn: "Which JavaScript mechanism provides inheritance between objects?"
  },
  {
    word: "EVENT LOOP",
    track: "javascript",
    difficulty: "epic",
    hintKa: "რომელი მექანიზმი მართავს JavaScript-ის asynchronous task-ების შესრულებას?",
    hintEn: "Which mechanism coordinates asynchronous tasks in JavaScript?"
  }
];

const ENGLISH_HINTS = {
  HTML: "Which markup language creates the structure of a web page?",
  CSS: "Which language controls the visual style of a web page?",
  TAG: "What identifies an HTML element inside angle brackets?",
  SELECTOR: "What chooses the HTML elements that CSS should style?",
  SCSS: "Which Sass syntax looks similar to regular CSS?",
  MIXIN: "What stores a reusable group of styles in SCSS?",
  NESTING: "What is placing selectors inside other selectors called in SCSS?",
  PARTIAL: "What is an SCSS file whose name begins with an underscore called?",
  BRANCH: "What creates an independent line of development in Git?",
  COMMIT: "What saves a specific snapshot of changes in Git?",
  GITHUB: "Which platform hosts and shares Git repositories?",
  MERGE: "Which Git operation combines changes from two branches?",
  VARIABLE: "What stores a value under a name in JavaScript?",
  FUNCTION: "What is a reusable block of code called?",
  ARRAY: "Which data structure stores an ordered list of values?",
  OBJECT: "What stores data as key-value pairs?",
  CALLBACK: "What is a function passed to another function as an argument called?",
  EVENT: "What is a browser action such as click or keydown called?",
  METHOD: "What is a function that belongs to an object called?",
  DOM: "Which model represents an HTML document as a tree of objects?",
  CLOSURE: "What lets a function retain access to variables from its outer scope?",
  PROTOTYPE: "Which JavaScript mechanism provides inheritance between objects?",
  PROMISE: "Which object represents the future result of an asynchronous operation?",
  ASYNC: "Which keyword defines a function that always returns a Promise?",
  GENERATOR: "What is a function that can pause and resume its execution called?",
  "EVENT LOOP": "Which mechanism coordinates asynchronous tasks in JavaScript?",
  HOISTING: "What is JavaScript's behavior of processing declarations before execution called?",
  CURRYING: "What transforms a multi-argument function into a chain of single-argument functions?"
};

const ALPHABET = "აბგდევზთიკლმნოპჟრსტუფქღყშჩცძწჭხჯჰ".split("");
const LATIN_ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const MAX_MISTAKES = 6;

const LATIN_TO_GEORGIAN = {
  a: "ა",
  b: "ბ",
  g: "გ",
  d: "დ",
  e: "ე",
  v: "ვ",
  z: "ზ",
  T: "თ",
  i: "ი",
  k: "კ",
  l: "ლ",
  m: "მ",
  n: "ნ",
  o: "ო",
  p: "პ",
  J: "ჟ",
  r: "რ",
  s: "ს",
  t: "ტ",
  u: "უ",
  f: "ფ",
  q: "ქ",
  R: "ღ",
  y: "ყ",
  S: "შ",
  C: "ჩ",
  c: "ც",
  Z: "ძ",
  w: "წ",
  W: "ჭ",
  x: "ხ",
  j: "ჯ",
  h: "ჰ"
};

const I18N = {
  ka: {
    title: "ჩამოხრჩობანა — პროგრამირების თამაში",
    description: "ორენოვანი პროგრამირების ტერმინების თამაში ოთხი სირთულის დონით.",
    brand: "ჩამოხრჩობანა",
    brandLabel: "ჩამოხრჩობანა — მთავარი",
    currentStreak: "მიმდინარე სერია",
    createRound: "შექმენი შენი რაუნდი",
    chooseChallenge: "აირჩიე გამოწვევა",
    difficulty: "სირთულე",
    language: "ენა",
    technologyTrack: "მიმართულება",
    round: "რაუნდი",
    guessWord: "გამოიცანი სიტყვა!",
    gameSubtitle: "აირჩიე ასო და არ დაკარგო ყველა გული.",
    lives: "სიცოცხლე",
    technology: "ტექნოლოგია",
    hintLabel: "მინიშნება:",
    keyboardLabel: "დააჭირე ასოს ეკრანზე ან კლავიატურაზე",
    useHint: "მინიშნება",
    newWord: "ახალი სიტყვა",
    score: "ქულა",
    wordsWon: "გამოცნობილი სიტყვა",
    bestStreak: "საუკეთესო სერია",
    nextWord: "შემდეგი სიტყვა",
    close: "დახურვა",
    howToPlay: "როგორ ვითამაშოთ?",
    helpIntro: "აირჩიე ასოები და გამოიცანი დამალული პროგრამირების ტერმინი. რაუნდის დასრულებამდე ექვსი შეცდომის უფლება გაქვს.",
    helpInput: "ეკრანისა და ფიზიკური კლავიატურის გამოყენება ნებისმიერ დროს შეგიძლია.",
    helpHint: "თუ გაიჭედე, მინიშნება ერთ ასოს გაგიხსნის.",
    helpDifficulty: "აირჩიე სირთულე ყოველი ახალი გამოწვევისთვის.",
    helpStreak: "ზედიზედ მოგებული რაუნდები შენს სერიას გაზრდის.",
    gotIt: "გასაგებია!",
    easy: "მარტივი",
    medium: "საშუალო",
    hard: "რთული",
    epic: "ეპიკური",
    muteSound: "ხმის გამორთვა",
    enableSound: "ხმის ჩართვა",
    darkMode: "მუქი რეჟიმის ჩართვა",
    lightMode: "ღია რეჟიმის ჩართვა",
    helpLabel: "თამაშის წესები",
    playerStats: "მოთამაშის სტატისტიკა",
    roundProgress: "რაუნდის პროგრესი",
    hiddenWord: "დამალული სიტყვა",
    blank: "გამოტოვებული",
    wonTitle: "სიტყვა გამოიცანი!",
    almost: "თითქმის გამოგივიდა!",
    tryAgain: "კიდევ სცადე",
    correctAnswer: "სწორი პასუხი იყო",
    points: "ქულა",
    hintRevealed: "მინიშნებამ გახსნა ასო",
    soundOn: "ხმა ჩართულია",
    soundOff: "ხმა გამორთულია",
    mistakesLeft: (count) => `დარჩენილია ${count} შეცდომა`,
    drawingStatus: (mistakes) => `საკიდარის ნახატი: ${mistakes} შეცდომა ${MAX_MISTAKES}-დან`,
    letterLabel: (letter) => `ასო ${letter}`
  },
  en: {
    title: "Hangman — Programming Word Game",
    description: "A bilingual programming word game with four difficulty levels.",
    brand: "Hangman",
    brandLabel: "Hangman — Home",
    currentStreak: "Current streak",
    createRound: "Build your round",
    chooseChallenge: "Choose your challenge",
    difficulty: "Difficulty",
    language: "Language",
    technologyTrack: "Technology track",
    round: "Round",
    guessWord: "Guess the word!",
    gameSubtitle: "Choose a letter and keep your hearts safe.",
    lives: "Lives",
    technology: "Technology",
    hintLabel: "Hint:",
    keyboardLabel: "Choose a letter on screen or use your keyboard",
    useHint: "Use a hint",
    newWord: "New word",
    score: "Score",
    wordsWon: "Words won",
    bestStreak: "Best streak",
    nextWord: "Next word",
    close: "Close",
    howToPlay: "How to play",
    helpIntro: "Choose letters to reveal the hidden programming term. You can make up to six mistakes before the round ends.",
    helpInput: "Switch between the onscreen and physical keyboard whenever you like.",
    helpHint: "If you get stuck, a hint can reveal one letter.",
    helpDifficulty: "Choose a difficulty for every new challenge.",
    helpStreak: "Win consecutive rounds to grow your streak.",
    gotIt: "Got it!",
    easy: "Easy",
    medium: "Medium",
    hard: "Hard",
    epic: "Epic",
    muteSound: "Mute sound",
    enableSound: "Turn sound on",
    darkMode: "Turn on dark mode",
    lightMode: "Turn on light mode",
    helpLabel: "How to play",
    playerStats: "Player statistics",
    roundProgress: "Round progress",
    hiddenWord: "Hidden word",
    blank: "blank",
    wonTitle: "You got it!",
    almost: "So close!",
    tryAgain: "Try another one",
    correctAnswer: "The correct answer was",
    points: "points",
    hintRevealed: "The hint revealed",
    soundOn: "Sound is on",
    soundOff: "Sound is off",
    mistakesLeft: (count) => `${count} mistakes remaining`,
    drawingStatus: (mistakes) => `Hangman drawing: ${mistakes} of ${MAX_MISTAKES} mistakes`,
    letterLabel: (letter) => `Letter ${letter}`
  }
};

const TOPICS = {
  technology: { icon: "💻" }
};

const TRACKS = {
  html: "HTML",
  css: "CSS",
  scss: "SCSS",
  javascript: "JavaScript"
};

const DIFFICULTIES = {
  easy: { multiplier: 1 },
  medium: { multiplier: 1.5 },
  hard: { multiplier: 2 },
  epic: { multiplier: 3 }
};

/* --- თამაშის მდგომარეობა --- */
let selectedTrack = "html";
let selectedDifficulty = "easy";
let currentLanguage = localStorage.getItem("hangoLanguage") === "en" ? "en" : "ka";
let currentWord = getMatchingWords()[0];
let guessedLetters = new Set();
let mistakes = 0;
let round = 1;
let gameFinished = false;
let soundEnabled = true;
let toastTimer;

const savedStats = safelyReadStorage("hangoStats");
let stats = savedStats || {
  score: 0,
  wins: 0,
  streak: 0,
  bestStreak: 0
};

/* --- ელემენტების მოძიება --- */
const wordDisplay = document.querySelector("#wordDisplay");
const keyboard = document.querySelector("#keyboard");
const livesHearts = document.querySelector("#livesHearts");
const progressBar = document.querySelector("#progressBar");
const categoryName = document.querySelector("#categoryName");
const categoryIcon = document.querySelector("#categoryIcon");
const difficultyName = document.querySelector("#difficultyName");
const difficultyChoices = document.querySelector("#difficultyChoices");
const trackChoices = document.querySelector("#trackChoices");
const languageChoices = document.querySelector("#languageChoices");
const hintText = document.querySelector("#hintText");
const hintBox = document.querySelector("#hintBox");
const hangman = document.querySelector("#hangman");
const roundNumber = document.querySelector("#roundNumber");
const newGameButton = document.querySelector("#newGameButton");
const hintButton = document.querySelector("#hintButton");
const themeButton = document.querySelector("#themeButton");
const soundButton = document.querySelector("#soundButton");
const helpButton = document.querySelector("#helpButton");
const helpDialog = document.querySelector("#helpDialog");
const closeHelpButton = document.querySelector("#closeHelpButton");
const gotItButton = document.querySelector("#gotItButton");
const resultDialog = document.querySelector("#resultDialog");
const resultEmoji = document.querySelector("#resultEmoji");
const resultEyebrow = document.querySelector("#resultEyebrow");
const resultTitle = document.querySelector("#resultTitle");
const resultMessage = document.querySelector("#resultMessage");
const playAgainButton = document.querySelector("#playAgainButton");
const toast = document.querySelector("#toast");

/* --- დამხმარე ფუნქციები --- */
function safelyReadStorage(key) {
  try {
    return JSON.parse(localStorage.getItem(key) || "null");
  } catch {
    return null;
  }
}

function t(key, ...values) {
  const translation = I18N[currentLanguage][key];
  return typeof translation === "function" ? translation(...values) : translation;
}

function applyLanguage() {
  document.documentElement.lang = currentLanguage;
  document.title = t("title");
  document.querySelector('meta[name="description"]').content = t("description");

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    element.setAttribute("aria-label", t(element.dataset.i18nAria));
  });

  const difficultyIcons = {
    easy: "🌱",
    medium: "⚡",
    hard: "🔥",
    epic: "👑"
  };

  difficultyChoices.querySelectorAll("option").forEach((option) => {
    option.textContent = `${difficultyIcons[option.value]} ${t(option.value)}`;
  });

  languageChoices.value = currentLanguage;
  updateControlLabels();
}

function setLanguage(language) {
  currentLanguage = language;
  localStorage.setItem("hangoLanguage", language);
  applyLanguage();
  renderKeyboard();
  renderGame();
}

function getMatchingWords() {
  return WORDS.filter((entry) => (
    entry.track === selectedTrack && entry.difficulty === selectedDifficulty
  ));
}

function getNextWord() {
  const matchingWords = getMatchingWords();
  const alternatives = matchingWords.filter((entry) => entry.word !== currentWord?.word);
  const pool = alternatives.length > 0 ? alternatives : matchingWords;

  return pool[Math.floor(Math.random() * pool.length)];
}

function getActiveAlphabet() {
  return LATIN_ALPHABET;
}

function getLetterFromKeyboard(key) {
  const latinLetter = key.toUpperCase();
  return LATIN_ALPHABET.includes(latinLetter) ? latinLetter : null;
}

/* --- ინტერფეისის განახლება --- */
function renderKeyboard() {
  keyboard.innerHTML = "";

  getActiveAlphabet().forEach((letter) => {
    const key = document.createElement("button");
    key.className = "key";
    key.type = "button";
    key.textContent = letter;
    key.dataset.letter = letter;
    key.setAttribute("aria-label", t("letterLabel", letter));
    key.addEventListener("click", (event) => {
      if (event.detail > 0) {
        key.blur();
      }

      makeGuess(letter);
    });
    keyboard.appendChild(key);
  });
}

function renderWord() {
  wordDisplay.innerHTML = "";

  [...currentWord.word].forEach((letter) => {
    const slot = document.createElement("span");
    const isSpace = letter === " ";
    const isRevealed = guessedLetters.has(letter) || gameFinished;

    slot.className = "letter-slot";

    if (isSpace) {
      slot.classList.add("is-space");
    } else if (isRevealed) {
      slot.classList.add("is-revealed");
      slot.textContent = letter;
    }

    wordDisplay.appendChild(slot);
  });

  const uniqueLetters = new Set(currentWord.word.replaceAll(" ", ""));
  const revealedCount = [...uniqueLetters].filter((letter) => guessedLetters.has(letter)).length;
  const progress = (revealedCount / uniqueLetters.size) * 100;

  progressBar.style.width = `${progress}%`;
  wordDisplay.setAttribute(
    "aria-label",
    [...currentWord.word]
      .map((letter) => guessedLetters.has(letter) || letter === " " ? letter : t("blank"))
      .join(" ")
  );
}

function renderLives() {
  livesHearts.innerHTML = "";

  for (let index = 0; index < MAX_MISTAKES; index += 1) {
    const heart = document.createElement("span");
    heart.className = "heart";
    heart.textContent = "♥";
    heart.style.color = "var(--red)";
    heart.setAttribute("aria-hidden", "true");

    if (index < mistakes) {
      heart.classList.add("is-lost");
    }

    livesHearts.appendChild(heart);
  }

  livesHearts.parentElement.setAttribute(
    "aria-label",
    t("mistakesLeft", MAX_MISTAKES - mistakes)
  );
}

function renderHangman() {
  document.querySelectorAll(".hangman-part").forEach((part) => {
    const partNumber = Number(part.dataset.part);
    part.classList.toggle("is-visible", partNumber < mistakes);
  });

  hangman.setAttribute(
    "aria-label",
    t("drawingStatus", mistakes)
  );
}

function renderStats() {
  document.querySelector("#scoreCount").textContent = stats.score;
  document.querySelector("#winCount").textContent = stats.wins;
  document.querySelector("#streakCount").textContent = stats.streak;
  document.querySelector("#bestStreak").textContent = stats.bestStreak;
}

function renderChoices() {
  difficultyChoices.value = selectedDifficulty;
  trackChoices.value = selectedTrack;
  languageChoices.value = currentLanguage;
}

function renderGame() {
  categoryName.textContent = `${t("technology")} · ${TRACKS[currentWord.track]}`;
  categoryIcon.textContent = TOPICS.technology.icon;
  difficultyName.textContent = t(currentWord.difficulty);
  hintText.textContent = currentLanguage === "ka" ? currentWord.hintKa : currentWord.hintEn;
  roundNumber.textContent = round;
  renderChoices();
  renderWord();
  renderLives();
  renderHangman();
  renderStats();
}

/* --- თამაშის მოქმედებები --- */
function makeGuess(letter) {
  if (gameFinished || guessedLetters.has(letter) || !getActiveAlphabet().includes(letter)) {
    return;
  }

  guessedLetters.add(letter);
  const key = keyboard.querySelector(`[data-letter="${letter}"]`);
  const isCorrect = currentWord.word.includes(letter);

  if (key) {
    key.disabled = true;
    key.classList.add(isCorrect ? "is-correct" : "is-wrong");
  }

  if (!isCorrect) {
    mistakes += 1;
    playTone("wrong");
  } else {
    playTone("correct");
  }

  renderWord();
  renderLives();
  renderHangman();
  checkResult();
}

function checkResult() {
  const lettersToGuess = [...new Set(currentWord.word.replaceAll(" ", ""))];
  const hasWon = lettersToGuess.every((letter) => guessedLetters.has(letter));

  if (hasWon) {
    finishGame(true);
  } else if (mistakes >= MAX_MISTAKES) {
    finishGame(false);
  }
}

function finishGame(hasWon) {
  gameFinished = true;
  renderWord();

  keyboard.querySelectorAll(".key").forEach((key) => {
    key.disabled = true;
  });

  if (hasWon) {
    const baseScore = Math.max(20, 100 - mistakes * 10);
    const roundScore = Math.round(baseScore * DIFFICULTIES[selectedDifficulty].multiplier);

    stats.score += roundScore;
    stats.wins += 1;
    stats.streak += 1;
    stats.bestStreak = Math.max(stats.bestStreak, stats.streak);
    resultEmoji.textContent = "🎉";
    resultEyebrow.textContent = `+${roundScore} ${t("points")}`;
    resultTitle.textContent = t("wonTitle");
    resultMessage.innerHTML = `${t("correctAnswer")} <strong>${currentWord.word}</strong>.`;
    playTone("win");
  } else {
    stats.streak = 0;
    resultEmoji.textContent = "🌱";
    resultEyebrow.textContent = t("almost");
    resultTitle.textContent = t("tryAgain");
    resultMessage.innerHTML = `${t("correctAnswer")} <strong>${currentWord.word}</strong>.`;
    playTone("lose");
  }

  saveStats();
  renderStats();

  window.setTimeout(() => {
    resultDialog.showModal();
  }, 550);
}

function startNewGame(showMessage = false) {
  currentWord = getNextWord();
  guessedLetters = new Set();
  mistakes = 0;
  gameFinished = false;
  round += 1;

  renderKeyboard();
  renderGame();

  if (showMessage) {
    showToast(`${TRACKS[selectedTrack]} · ${t(selectedDifficulty)}`);
  }
}

function revealHintLetter() {
  if (gameFinished) {
    return;
  }

  const hiddenLetters = [...new Set(currentWord.word.replaceAll(" ", ""))]
    .filter((letter) => !guessedLetters.has(letter));

  if (hiddenLetters.length === 0) {
    return;
  }

  const revealedLetter = hiddenLetters[Math.floor(Math.random() * hiddenLetters.length)];
  hintBox.classList.remove("is-flashing");
  void hintBox.offsetWidth;
  hintBox.classList.add("is-flashing");
  showToast(`${t("hintRevealed")} “${revealedLetter}”`);
  makeGuess(revealedLetter);
}

function selectDifficulty(difficulty) {
  selectedDifficulty = difficulty;
  startNewGame(true);
}

function selectTrack(track) {
  selectedTrack = track;
  startNewGame(true);
}

/* --- ფერის რეჟიმი --- */
function updateControlLabels() {
  const isDark = document.documentElement.dataset.theme === "dark";

  themeButton.setAttribute("aria-label", isDark ? t("lightMode") : t("darkMode"));
  soundButton.setAttribute("aria-label", soundEnabled ? t("muteSound") : t("enableSound"));
  helpButton.setAttribute("aria-label", t("helpLabel"));
  document.querySelector(".stats-row").setAttribute("aria-label", t("playerStats"));
  progressBar.parentElement.setAttribute("aria-label", t("roundProgress"));
}

function setTheme(theme) {
  const isDark = theme === "dark";

  document.documentElement.dataset.theme = theme;
  document.querySelector('meta[name="theme-color"]').content = isDark ? "#191720" : "#6c5ce7";
  themeButton.setAttribute("aria-pressed", String(isDark));
  themeButton.firstElementChild.textContent = isDark ? "☀️" : "🌙";
  localStorage.setItem("hangoTheme", theme);
  updateControlLabels();
}

function initializeTheme() {
  const savedTheme = localStorage.getItem("hangoTheme");
  const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

  setTheme(savedTheme || preferredTheme);
}

/* --- ხმოვანი ეფექტები --- */
function playTone(type) {
  if (!soundEnabled) {
    return;
  }

  const AudioContextClass = window.AudioContext || window.webkitAudioContext;

  if (!AudioContextClass) {
    return;
  }

  const audioContext = new AudioContextClass();
  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();
  const tones = {
    correct: [520, 0.08],
    wrong: [180, 0.12],
    win: [660, 0.2],
    lose: [150, 0.2]
  };
  const [frequency, duration] = tones[type];

  oscillator.type = type === "wrong" || type === "lose" ? "triangle" : "sine";
  oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
  gain.gain.setValueAtTime(0.08, audioContext.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + duration);
  oscillator.connect(gain);
  gain.connect(audioContext.destination);
  oscillator.start();
  oscillator.stop(audioContext.currentTime + duration);
}

/* --- შენახვა და შეტყობინებები --- */
function saveStats() {
  localStorage.setItem("hangoStats", JSON.stringify(stats));
}

function showToast(message) {
  window.clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("is-visible");

  toastTimer = window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 2200);
}

/* --- მოვლენების დამუშავება --- */
newGameButton.addEventListener("click", () => startNewGame());
hintButton.addEventListener("click", revealHintLetter);

difficultyChoices.addEventListener("change", (event) => {
  if (event.target.value !== selectedDifficulty) {
    selectDifficulty(event.target.value);
  }
});

trackChoices.addEventListener("change", (event) => {
  if (event.target.value !== selectedTrack) {
    selectTrack(event.target.value);
  }
});

languageChoices.addEventListener("change", (event) => {
  setLanguage(event.target.value);
});

playAgainButton.addEventListener("click", () => {
  resultDialog.close();
  startNewGame();
});

themeButton.addEventListener("click", () => {
  const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  setTheme(nextTheme);
});

soundButton.addEventListener("click", () => {
  soundEnabled = !soundEnabled;
  soundButton.setAttribute("aria-pressed", String(!soundEnabled));
  soundButton.firstElementChild.textContent = soundEnabled ? "🔊" : "🔇";
  updateControlLabels();
  showToast(soundEnabled ? t("soundOn") : t("soundOff"));
});

helpButton.addEventListener("click", () => helpDialog.showModal());
closeHelpButton.addEventListener("click", () => helpDialog.close());
gotItButton.addEventListener("click", () => helpDialog.close());

window.addEventListener("keydown", (event) => {
  const letter = getLetterFromKeyboard(event.key);
  const isChoosingOption = event.target instanceof HTMLSelectElement;

  if (letter && !isChoosingOption && !helpDialog.open && !resultDialog.open) {
    event.preventDefault();
    makeGuess(letter);
  }
}, { capture: true });

/* --- აპლიკაციის გაშვება --- */
initializeTheme();
applyLanguage();
renderKeyboard();
renderGame();
