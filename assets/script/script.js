/* --- საგამოცდო კითხვების ბანკი --- */
const TRACK_TERMS = {
  html: [
    "HTML", "TAG", "ELEMENT", "ATTRIBUTE", "HEADING", "PARAGRAPH", "LINK", "IMAGE", "LIST", "TABLE",
    "FORM", "BUTTON", "INPUT", "LABEL", "HEADER", "FOOTER", "MAIN", "SECTION", "ARTICLE", "NAVIGATION",
    "DIVISION", "SPAN", "BREAK", "COMMENT", "DOCTYPE", "BODY", "TITLE", "META", "SCRIPT", "STYLE",
    "ANCHOR", "ORDERED LIST", "UNORDERED LIST", "LIST ITEM", "TABLE ROW", "TABLE CELL", "CAPTION", "TEXTAREA", "SELECT", "OPTION",
    "CHECKBOX", "RADIO", "PLACEHOLDER", "IDENTIFIER", "CLASS", "SOURCE", "VIDEO", "AUDIO", "CANVAS", "TEMPLATE"
  ],
  css: [
    "CSS", "COLOR", "BACKGROUND", "BORDER", "MARGIN", "PADDING", "WIDTH", "HEIGHT", "DISPLAY", "POSITION",
    "FLEXBOX", "GRID", "SELECTOR", "CLASS", "IDENTIFIER", "CASCADE", "INHERITANCE", "SPECIFICITY", "BOX MODEL", "PSEUDOCLASS",
    "PSEUDOELEMENT", "MEDIA QUERY", "KEYFRAME", "ANIMATION", "TRANSITION", "TRANSFORM", "OPACITY", "OVERFLOW", "Z INDEX", "FLOAT",
    "CLEAR", "GAP", "ALIGN ITEMS", "JUSTIFY CONTENT", "GRID AREA", "GRID TEMPLATE", "FLEX GROW", "FLEX SHRINK", "OBJECT FIT", "ASPECT RATIO",
    "CUSTOM PROPERTY", "CALCULATION", "CLAMP", "VIEWPORT UNIT", "ROOT UNIT", "CONTAINER QUERY", "CASCADE LAYER", "SUBGRID", "LOGICAL PROPERTY", "COLOR MIX"
  ],
  scss: [
    "SCSS", "SASS", "VARIABLE", "NESTING", "PARTIAL", "IMPORT", "USE", "FORWARD", "MIXIN", "INCLUDE",
    "EXTEND", "PLACEHOLDER", "INTERPOLATION", "PARENT SELECTOR", "SILENT COMMENT", "LOUD COMMENT", "DATA TYPE", "NUMBER", "STRING", "COLOR",
    "LIST", "MAP", "BOOLEAN", "NULL", "CALCULATION", "OPERATOR", "EQUALITY", "RELATIONAL", "EACH LOOP", "FOR LOOP",
    "WHILE LOOP", "IF DIRECTIVE", "ELSE DIRECTIVE", "FUNCTION", "RETURN", "CONTENT BLOCK", "CONTENT EXISTS", "MODULE", "NAMESPACE", "CONFIGURATION",
    "DEFAULT FLAG", "GLOBAL FLAG", "OPTIONAL FLAG", "META MODULE", "MATH MODULE", "LIST MODULE", "MAP MODULE", "COLOR MODULE", "SELECTOR MODULE", "STRING MODULE"
  ],
  javascript: [
    "JAVASCRIPT", "VARIABLE", "CONSTANT", "LET", "FUNCTION", "ARROW FUNCTION", "PARAMETER", "ARGUMENT", "RETURN", "ARRAY",
    "OBJECT", "STRING", "NUMBER", "BOOLEAN", "NULL", "UNDEFINED", "SYMBOL", "BIGINT", "OPERATOR", "EXPRESSION",
    "STATEMENT", "CONDITION", "SWITCH", "LOOP", "ITERATOR", "METHOD", "PROPERTY", "DESTRUCTURING", "SPREAD", "REST PARAMETER",
    "TEMPLATE LITERAL", "SCOPE", "CLOSURE", "HOISTING", "CALLBACK", "PROMISE", "ASYNC FUNCTION", "AWAIT", "EVENT LOOP", "MICROTASK",
    "CLASS", "CONSTRUCTOR", "PROTOTYPE", "INHERITANCE", "MODULE", "EXPORT", "IMPORT", "GENERATOR", "ITERABLE", "WEAK MAP"
  ]
};

const EXAM_CLUES = {
  html: {
    HTML: ["defines the structure and meaning of web content", "განსაზღვრავს ვებკონტენტის სტრუქტურასა და მნიშვნელობას"],
    TAG: ["marks the beginning or end of an HTML element", "აღნიშნავს HTML ელემენტის დასაწყისს ან დასასრულს"],
    ELEMENT: ["combines tags, attributes, and content into one document unit", "აერთიანებს tag-ებს, attribute-ებსა და content-ს ერთ ერთეულში"],
    ATTRIBUTE: ["adds configuration or metadata to an opening tag", "opening tag-ს დამატებით პარამეტრს ან metadata-ს ანიჭებს"],
    HEADING: ["creates a hierarchical section title from level one to six", "ქმნის პირველი-მეექვსე დონის იერარქიულ სათაურს"],
    PARAGRAPH: ["represents a block of related prose", "წარმოადგენს ერთმანეთთან დაკავშირებული ტექსტის აბზაცს"],
    LINK: ["connects the current document to another resource", "მიმდინარე დოკუმენტს სხვა რესურსთან აკავშირებს"],
    IMAGE: ["embeds an image and requires a useful text alternative when informative", "სვამს სურათს და ინფორმაციულ შემთხვევაში text alternative-ს საჭიროებს"],
    LIST: ["groups related items with ordered or unordered semantics", "აჯგუფებს დაკავშირებულ ელემენტებს დალაგებული ან დაულაგებელი semantics-ით"],
    TABLE: ["represents genuinely tabular data in rows and columns", "წარმოადგენს რეალურ tabular data-ს მწკრივებსა და სვეტებში"],
    FORM: ["groups controls that collect and submit user data", "აჯგუფებს user data-ს შემგროვებელ და გამგზავნ control-ებს"],
    BUTTON: ["provides a keyboard-accessible native control for an action", "ქმნის keyboard-accessible native control-ს მოქმედებისთვის"],
    INPUT: ["creates a form control whose behavior depends on its type", "ქმნის form control-ს, რომლის ქცევას მისი type განსაზღვრავს"],
    LABEL: ["gives a form control an accessible name and larger click target", "form control-ს accessible name-ს და დიდ click target-ს აძლევს"],
    HEADER: ["contains introductory content for a page or section", "შეიცავს გვერდის ან section-ის შესავალ content-ს"],
    FOOTER: ["contains closing information for a page or section", "შეიცავს გვერდის ან section-ის დასკვნით ინფორმაციას"],
    MAIN: ["identifies the document's unique primary content", "განსაზღვრავს დოკუმენტის ერთადერთ მთავარ content-ს"],
    SECTION: ["groups content around a shared theme, usually with a heading", "აჯგუფებს საერთო თემის content-ს, ჩვეულებრივ heading-ით"],
    ARTICLE: ["represents self-contained content that can stand independently", "წარმოადგენს დამოუკიდებლად გამოყენებად self-contained content-ს"],
    NAVIGATION: ["identifies a major group of navigation links", "განსაზღვრავს navigation link-ების მთავარ ჯგუფს"],
    DIVISION: ["provides a generic block container when no semantic element fits", "ქმნის generic block container-ს, როცა semantic element არ შეეფერება"],
    SPAN: ["provides a generic inline container without semantic meaning", "ქმნის semantic meaning-ის არმქონე generic inline container-ს"],
    BREAK: ["forces a line break where the break is part of the content", "აკეთებს line break-ს, როცა გაყოფა content-ის ნაწილია"],
    COMMENT: ["adds developer notes that are not rendered as page content", "ამატებს developer note-ს, რომელიც გვერდზე არ render-დება"],
    DOCTYPE: ["tells the browser to render the document in standards mode", "browser-ს დოკუმენტის standards mode-ში render-ს ავალებს"],
    BODY: ["contains the document content rendered in the browser viewport", "შეიცავს browser viewport-ში render-ებულ document content-ს"],
    TITLE: ["sets the document name shown in the browser tab and bookmarks", "ადგენს browser tab-სა და bookmark-ში ნაჩვენებ document name-ს"],
    META: ["provides document metadata such as encoding or viewport settings", "იძლევა document metadata-ს, მაგალითად encoding-ს ან viewport settings-ს"],
    SCRIPT: ["embeds or references executable JavaScript", "სვამს ან აკავშირებს executable JavaScript-ს"],
    STYLE: ["contains CSS rules scoped to the current document", "შეიცავს მიმდინარე document-ის CSS rule-ებს"],
    ANCHOR: ["creates a hyperlink when supplied with an href destination", "href destination-ის მითითებისას hyperlink-ს ქმნის"],
    "ORDERED LIST": ["groups items whose sequence is meaningful", "აჯგუფებს item-ებს, რომელთა თანმიმდევრობას მნიშვნელობა აქვს"],
    "UNORDERED LIST": ["groups related items whose sequence is not important", "აჯგუფებს item-ებს, რომელთა თანმიმდევრობა მნიშვნელოვანი არ არის"],
    "LIST ITEM": ["represents one entry inside an ordered or unordered list", "წარმოადგენს ordered ან unordered list-ის ერთ ჩანაწერს"],
    "TABLE ROW": ["groups cells horizontally within a table", "table-ში cell-ებს ჰორიზონტალურად აჯგუფებს"],
    "TABLE CELL": ["holds one item of data within a table row", "table row-ში მონაცემის ერთ cell-ს ინახავს"],
    CAPTION: ["provides an accessible title or description for a table", "table-ს accessible title-ს ან description-ს აძლევს"],
    TEXTAREA: ["collects multi-line plain-text input", "აგროვებს მრავალსტრიქონიან plain-text input-ს"],
    SELECT: ["presents a control for choosing from a list of options", "აჩვენებს option-ების სიიდან არჩევის control-ს"],
    OPTION: ["defines one selectable choice inside a select or datalist", "select-ში ან datalist-ში ერთ selectable choice-ს განსაზღვრავს"],
    CHECKBOX: ["lets a user independently toggle one or more choices", "user-ს ერთი ან მეტი არჩევანის დამოუკიდებლად toggle-ის საშუალებას აძლევს"],
    RADIO: ["lets a user choose exactly one option from a named group", "user-ს named group-იდან ზუსტად ერთი option-ის არჩევის საშუალებას აძლევს"],
    PLACEHOLDER: ["shows a short input example but does not replace a label", "აჩვენებს input example-ს, მაგრამ label-ს ვერ ცვლის"],
    IDENTIFIER: ["uniquely names one element for linking, scripting, or styling", "ერთ element-ს linking-ისთვის, scripting-ისთვის ან styling-ისთვის უნიკალურად ასახელებს"],
    CLASS: ["assigns one or more reusable grouping names to an element", "element-ს ერთ ან მეტ reusable grouping name-ს ანიჭებს"],
    SOURCE: ["provides alternative media resources for picture, audio, or video", "picture-ს, audio-ს ან video-ს alternative media resource-ებს აძლევს"],
    VIDEO: ["embeds a video player with optional controls and text tracks", "სვამს video player-ს optional control-ებითა და text track-ებით"],
    AUDIO: ["embeds sound content with optional native playback controls", "სვამს sound content-ს optional native playback control-ებით"],
    CANVAS: ["provides a bitmap drawing surface controlled mainly by JavaScript", "ქმნის bitmap drawing surface-ს, რომელსაც ძირითადად JavaScript მართავს"],
    TEMPLATE: ["stores inert markup that can later be cloned by JavaScript", "ინახავს inert markup-ს, რომლის clone-იც JavaScript-ს მოგვიანებით შეუძლია"]
  },
  css: {
    CSS: ["controls the presentation and layout of structured documents", "მართავს structured document-ის presentation-სა და layout-ს"],
    COLOR: ["sets the foreground color used to draw text and decorations", "ადგენს text-ისა და decoration-ის foreground color-ს"],
    BACKGROUND: ["paints an element behind its content and border", "element-ს content-ისა და border-ის უკან აფერადებს"],
    BORDER: ["draws a line around an element's padding box", "element-ის padding box-ის გარშემო ხაზს ავლებს"],
    MARGIN: ["creates transparent space outside an element's border", "element-ის border-ის გარეთ transparent space-ს ქმნის"],
    PADDING: ["creates space between content and its border", "content-სა და მის border-ს შორის სივრცეს ქმნის"],
    WIDTH: ["sets the horizontal size of an element's content box by default", "default-ად element-ის content box-ის horizontal size-ს ადგენს"],
    HEIGHT: ["sets the vertical size of an element's content box by default", "default-ად element-ის content box-ის vertical size-ს ადგენს"],
    DISPLAY: ["chooses an element's outer and inner layout behavior", "element-ის outer და inner layout behavior-ს ირჩევს"],
    POSITION: ["selects the positioning scheme used by an element", "element-ის positioning scheme-ს ირჩევს"],
    FLEXBOX: ["lays out items efficiently along one primary axis", "item-ებს ერთ მთავარ axis-ზე ეფექტურად ალაგებს"],
    GRID: ["lays out content in rows and columns simultaneously", "content-ს ერთდროულად row-ებსა და column-ებში ალაგებს"],
    SELECTOR: ["matches document elements that a rule should style", "პოულობს document element-ებს, რომლებსაც rule გააფორმებს"],
    CLASS: ["matches elements sharing a reusable class attribute value", "პოულობს shared class attribute value-ის მქონე element-ებს"],
    IDENTIFIER: ["matches the element whose id has a specific value", "პოულობს element-ს, რომლის id-ს კონკრეტული value აქვს"],
    CASCADE: ["resolves competing declarations to determine the winning value", "competing declaration-ებიდან winning value-ს განსაზღვრავს"],
    INHERITANCE: ["passes selected computed property values from parent to child", "selected computed property value-ებს parent-იდან child-ზე გადასცემს"],
    SPECIFICITY: ["compares selector weights after cascade origin and layer", "cascade origin-ისა და layer-ის შემდეგ selector weight-ებს ადარებს"],
    "BOX MODEL": ["describes content, padding, border, and margin around an element", "element-ის content-ს, padding-ს, border-სა და margin-ს აღწერს"],
    PSEUDOCLASS: ["selects an element based on state or structural condition", "element-ს state-ის ან structural condition-ის მიხედვით ირჩევს"],
    PSEUDOELEMENT: ["styles a generated or specific part of an element", "element-ის generated ან specific part-ს აფორმებს"],
    "MEDIA QUERY": ["conditionally applies styles based on media features", "style-ებს media feature-ების მიხედვით conditionally იყენებს"],
    KEYFRAME: ["defines an animation state at a point in its timeline", "animation timeline-ის კონკრეტულ მომენტში state-ს განსაზღვრავს"],
    ANIMATION: ["runs keyframed style changes without requiring user interaction", "keyframed style change-ებს user interaction-ის გარეშე ასრულებს"],
    TRANSITION: ["interpolates a property when its value changes", "property value-ის შეცვლისას შუალედურ value-ებს ითვლის"],
    TRANSFORM: ["visually translates, rotates, scales, or skews an element", "element-ს ვიზუალურად გადაადგილებს, აბრუნებს, ადიდებს ან ხრის"],
    OPACITY: ["controls the transparency of an entire element", "მთელი element-ის transparency-ს მართავს"],
    OVERFLOW: ["controls content that extends beyond an element's box", "element box-ის ფარგლებს გაცდენილ content-ს მართავს"],
    "Z INDEX": ["controls stacking order for positioned or stacking-context items", "positioned ან stacking-context item-ების stacking order-ს მართავს"],
    FLOAT: ["moves a box to one side so inline content can wrap around it", "box-ს გვერდზე წევს, რათა inline content მის გარშემო შემოეხვიოს"],
    CLEAR: ["prevents a box from sitting beside earlier floated elements", "box-ს წინა floated element-ების გვერდით განთავსებას უშლის"],
    GAP: ["sets gutters between flex, grid, or multi-column items", "flex, grid ან multi-column item-ებს შორის gutter-ს ადგენს"],
    "ALIGN ITEMS": ["aligns items on the container's cross axis", "container-ის cross axis-ზე item-ებს ასწორებს"],
    "JUSTIFY CONTENT": ["distributes free space along a layout's main axis", "layout-ის main axis-ზე free space-ს ანაწილებს"],
    "GRID AREA": ["places an item or names a rectangular grid region", "item-ს ათავსებს ან rectangular grid region-ს ასახელებს"],
    "GRID TEMPLATE": ["defines explicit grid tracks and named areas", "explicit grid track-ებსა და named area-ებს განსაზღვრავს"],
    "FLEX GROW": ["sets how an item receives positive free space", "ადგენს, როგორ მიიღებს item positive free space-ს"],
    "FLEX SHRINK": ["sets how an item contracts when space is insufficient", "ადგენს, როგორ შეიკუმშება item არასაკმარისი სივრცისას"],
    "OBJECT FIT": ["controls how replaced content fits its content box", "replaced content-ის content box-ში მოთავსებას მართავს"],
    "ASPECT RATIO": ["provides a preferred width-to-height proportion", "სასურველ width-to-height proportion-ს განსაზღვრავს"],
    "CUSTOM PROPERTY": ["stores a reusable cascaded value referenced with var", "ინახავს var-ით გამოყენებად reusable cascaded value-ს"],
    CALCULATION: ["combines compatible CSS values with runtime arithmetic", "compatible CSS value-ებს runtime arithmetic-ით აერთიანებს"],
    CLAMP: ["limits a preferred value between minimum and maximum bounds", "preferred value-ს minimum და maximum boundary-ს შორის ზღუდავს"],
    "VIEWPORT UNIT": ["sizes a value relative to viewport dimensions", "value-ს viewport dimension-ებთან მიმართებით ზომავს"],
    "ROOT UNIT": ["sizes a value relative to the root element's font size", "value-ს root element-ის font size-თან მიმართებით ზომავს"],
    "CONTAINER QUERY": ["styles a component according to its containing box", "component-ს მისი containing box-ის მიხედვით აფორმებს"],
    "CASCADE LAYER": ["organizes author styles into explicit precedence groups", "author style-ებს explicit precedence group-ებად აწყობს"],
    SUBGRID: ["lets a nested grid reuse its parent's track sizing", "nested grid-ს parent-ის track sizing-ის გამოყენების საშუალებას აძლევს"],
    "LOGICAL PROPERTY": ["adapts layout directions to writing mode and text direction", "layout direction-ს writing mode-სა და text direction-ს არგებს"],
    "COLOR MIX": ["blends two colors in a chosen color space", "ორ color-ს არჩეულ color space-ში აერთიანებს"]
  },
  scss: {
    SCSS: ["provides the CSS-compatible syntax of the Sass language", "წარმოადგენს Sass language-ის CSS-compatible syntax-ს"],
    SASS: ["compiles an extended stylesheet language into standard CSS", "extended stylesheet language-ს standard CSS-ად compile-ს უკეთებს"],
    VARIABLE: ["stores a reusable Sass value using a dollar-prefixed name", "dollar-prefixed name-ით reusable Sass value-ს ინახავს"],
    NESTING: ["writes related selectors inside a parent rule", "related selector-ებს parent rule-ის შიგნით წერს"],
    PARTIAL: ["keeps reusable Sass code in an underscore-prefixed file", "reusable Sass code-ს underscore-prefixed file-ში ინახავს"],
    IMPORT: ["loads legacy Sass files but is deprecated in favor of modules", "legacy Sass file-ებს ტვირთავს, თუმცა module system-ით ჩანაცვლებულია"],
    USE: ["loads a Sass module once and exposes a namespace", "Sass module-ს ერთხელ ტვირთავს და namespace-ს ქმნის"],
    FORWARD: ["re-exports selected members from another Sass module", "სხვა Sass module-ის selected member-ებს ხელახლა export-ს უკეთებს"],
    MIXIN: ["defines a reusable block of declarations that can accept arguments", "ქმნის argument-ების მიმღებ reusable declaration block-ს"],
    INCLUDE: ["inserts the output of a mixin at the current location", "mixin-ის output-ს მიმდინარე ადგილას სვამს"],
    EXTEND: ["makes one selector inherit the styles matched by another", "ერთ selector-ს მეორის matched style-ების გაზიარებას აიძულებს"],
    PLACEHOLDER: ["defines a percent-prefixed selector intended only for extension", "ქმნის მხოლოდ extension-ისთვის განკუთვნილ percent-prefixed selector-ს"],
    INTERPOLATION: ["injects an expression into selectors, names, or strings", "expression-ს selector-ში, name-ში ან string-ში სვამს"],
    "PARENT SELECTOR": ["references the current outer selector with an ampersand", "ampersand-ით მიმდინარე outer selector-ს უკავშირდება"],
    "SILENT COMMENT": ["creates a comment omitted from compiled CSS", "ქმნის comment-ს, რომელიც compiled CSS-ში არ ხვდება"],
    "LOUD COMMENT": ["creates a comment normally preserved in compiled CSS", "ქმნის comment-ს, რომელიც compiled CSS-ში ჩვეულებრივ რჩება"],
    "DATA TYPE": ["classifies Sass values such as numbers, colors, lists, and maps", "Sass value-ებს number, color, list და map ტიპებად ყოფს"],
    NUMBER: ["represents a numeric Sass value with optional compatible units", "წარმოადგენს numeric Sass value-ს optional compatible unit-ებით"],
    STRING: ["represents quoted or unquoted textual Sass data", "წარმოადგენს quoted ან unquoted textual Sass data-ს"],
    COLOR: ["represents a color value that Sass color functions can transform", "წარმოადგენს color value-ს, რომელსაც Sass function-ები ცვლიან"],
    LIST: ["stores an ordered sequence of Sass values", "ინახავს Sass value-ების ordered sequence-ს"],
    MAP: ["stores Sass values as key-value associations", "Sass value-ებს key-value association-ებად ინახავს"],
    BOOLEAN: ["represents true or false in Sass conditions", "Sass condition-ში true ან false value-ს წარმოადგენს"],
    NULL: ["represents an absent Sass value often omitted from output", "წარმოადგენს absent Sass value-ს, რომელიც output-იდან ხშირად ქრება"],
    CALCULATION: ["preserves or simplifies CSS math such as calc and min", "CSS math-ს, მაგალითად calc-სა და min-ს, ინარჩუნებს ან ამარტივებს"],
    OPERATOR: ["performs Sass arithmetic, comparison, or boolean logic", "Sass arithmetic-ს, comparison-ს ან boolean logic-ს ასრულებს"],
    EQUALITY: ["tests whether two Sass values are considered equal", "ამოწმებს, ორი Sass value თანაბარია თუ არა"],
    RELATIONAL: ["compares compatible Sass numbers using ordering operators", "compatible Sass number-ებს ordering operator-ებით ადარებს"],
    "EACH LOOP": ["iterates over every value in a list or map", "list-ის ან map-ის ყველა value-ზე iteration-ს ასრულებს"],
    "FOR LOOP": ["repeats a block across a numeric range", "block-ს numeric range-ზე იმეორებს"],
    "WHILE LOOP": ["repeats a block while a condition remains true", "block-ს იმეორებს, სანამ condition true-ა"],
    "IF DIRECTIVE": ["conditionally emits Sass code when an expression is truthy", "expression truthy-ისას Sass code-ს conditionally გამოსცემს"],
    "ELSE DIRECTIVE": ["provides a fallback branch for a failed Sass condition", "failed Sass condition-ისთვის fallback branch-ს ქმნის"],
    FUNCTION: ["defines reusable Sass logic that returns a value", "ქმნის reusable Sass logic-ს, რომელიც value-ს აბრუნებს"],
    RETURN: ["provides the result of a custom Sass function", "custom Sass function-ის result-ს აბრუნებს"],
    "CONTENT BLOCK": ["passes a block of styles into a mixin", "style block-ს mixin-ში გადასცემს"],
    "CONTENT EXISTS": ["checks whether a mixin received a content block", "ამოწმებს, mixin-მა content block მიიღო თუ არა"],
    MODULE: ["encapsulates Sass members loaded through the module system", "module system-ით ჩატვირთულ Sass member-ებს encapsulate-ს უკეთებს"],
    NAMESPACE: ["qualifies members to show which Sass module owns them", "member-ებს Sass module-ის owner-ის მიხედვით აკვალიფიცირებს"],
    CONFIGURATION: ["sets default module variables when loading with use", "use-ით ჩატვირთვისას default module variable-ებს ადგენს"],
    "DEFAULT FLAG": ["assigns a variable only when it is unset or null", "variable-ს მხოლოდ unset ან null მდგომარეობაში ანიჭებს value-ს"],
    "GLOBAL FLAG": ["updates a variable in the global Sass scope", "global Sass scope-ში variable-ს ცვლის"],
    "OPTIONAL FLAG": ["allows an extend to succeed even without a match", "extend-ს match-ის გარეშეც წარმატებით დასრულების საშუალებას აძლევს"],
    "META MODULE": ["inspects Sass types, functions, mixins, and modules", "Sass type-ებს, function-ებს, mixin-ებსა და module-ებს ამოწმებს"],
    "MATH MODULE": ["provides namespaced numeric constants and operations", "namespaced numeric constant-ებსა და operation-ებს იძლევა"],
    "LIST MODULE": ["provides namespaced functions for list manipulation", "list manipulation-ის namespaced function-ებს იძლევა"],
    "MAP MODULE": ["provides namespaced functions for map access and updates", "map access-ისა და update-ის namespaced function-ებს იძლევა"],
    "COLOR MODULE": ["provides namespaced color inspection and transformation functions", "color inspection-ისა და transformation-ის namespaced function-ებს იძლევა"],
    "SELECTOR MODULE": ["provides functions for parsing and combining selectors", "selector parsing-ისა და combining-ის function-ებს იძლევა"],
    "STRING MODULE": ["provides namespaced functions for string inspection and editing", "string inspection-ისა და editing-ის namespaced function-ებს იძლევა"]
  },
  javascript: {
    JAVASCRIPT: ["adds programmable behavior and logic to web applications", "ვებაპლიკაციებს პროგრამულ ქცევასა და ლოგიკას ამატებს"],
    VARIABLE: ["creates a named binding whose stored value may change", "ქმნის სახელდებულ binding-ს, რომლის შენახული მნიშვნელობა შეიძლება შეიცვალოს"],
    CONSTANT: ["creates a block-scoped binding that cannot be reassigned", "ქმნის block-scoped binding-ს, რომელსაც ახალ მნიშვნელობას ვეღარ მივანიჭებთ"],
    LET: ["declares a mutable block-scoped binding", "აცხადებს ცვლად block-scoped binding-ს"],
    FUNCTION: ["packages reusable statements into a callable unit", "მრავალჯერ გამოსაყენებელ statements-ს callable unit-ში აერთიანებს"],
    "ARROW FUNCTION": ["uses concise function syntax and captures this lexically", "იყენებს function-ის მოკლე syntax-ს და this-ს lexical scope-იდან იღებს"],
    PARAMETER: ["names a placeholder in a function declaration or definition", "function-ის declaration-ში ან definition-ში placeholder-ს ასახელებს"],
    ARGUMENT: ["is an actual value supplied when a function is called", "არის რეალური მნიშვნელობა, რომელიც function-ის გამოძახებისას გადაეცემა"],
    RETURN: ["ends a function call and supplies its result to the caller", "ასრულებს function call-ს და შედეგს caller-ს გადასცემს"],
    ARRAY: ["stores an ordered, zero-indexed collection of values", "ინახავს მნიშვნელობების დალაგებულ, zero-indexed კოლექციას"],
    OBJECT: ["groups data and behavior in keyed properties", "მონაცემებსა და ქცევას keyed properties-ში აერთიანებს"],
    STRING: ["represents an immutable sequence of text characters", "წარმოადგენს ტექსტური სიმბოლოების immutable თანმიმდევრობას"],
    NUMBER: ["represents most numeric values with IEEE 754 floating-point semantics", "რიცხვების უმეტესობას IEEE 754 floating-point წესებით წარმოადგენს"],
    BOOLEAN: ["represents one of the two logical values true and false", "წარმოადგენს ორიდან ერთ logical value-ს: true-ს ან false-ს"],
    NULL: ["explicitly represents the intentional absence of an object value", "object value-ის განზრახ არარსებობას აშკარად აღნიშნავს"],
    UNDEFINED: ["represents a missing or not-yet-assigned value", "აკლია ან ჯერ არ მინიჭებულ მნიშვნელობას წარმოადგენს"],
    SYMBOL: ["creates a unique primitive often used as an object property key", "ქმნის უნიკალურ primitive-ს, რომელიც ხშირად object property key-ად გამოიყენება"],
    BIGINT: ["represents integers beyond the safe range of Number", "Number-ის უსაფრთხო დიაპაზონზე დიდ მთელ რიცხვებს წარმოადგენს"],
    OPERATOR: ["performs an operation on one or more operands", "ერთ ან მეტ operand-ზე ოპერაციას ასრულებს"],
    EXPRESSION: ["is a valid code fragment that evaluates to a value", "არის სწორი code fragment, რომელიც მნიშვნელობად შეფასდება"],
    STATEMENT: ["is a complete instruction that performs an action or controls flow", "არის დასრულებული ინსტრუქცია, რომელიც მოქმედებას ასრულებს ან flow-ს მართავს"],
    CONDITION: ["produces the decision used to choose a control-flow branch", "ქმნის გადაწყვეტილებას, რომლის მიხედვითაც control-flow branch აირჩევა"],
    SWITCH: ["selects among multiple branches by comparing one expression", "ერთი expression-ის შედარებით რამდენიმე branch-ს შორის არჩევანს აკეთებს"],
    LOOP: ["repeats a block while a rule or sequence permits it", "იმეორებს block-ს, სანამ წესი ან sequence ამის საშუალებას იძლევა"],
    ITERATOR: ["implements next to return successive values and completion state", "next method-ით თანმიმდევრულ values-სა და completion state-ს აბრუნებს"],
    METHOD: ["is a function stored in or associated with an object property", "არის function, რომელიც object property-ში ინახება ან object-ს უკავშირდება"],
    PROPERTY: ["is a named or symbol-keyed member of an object", "არის object-ის name-ით ან symbol-ით გასაღებული member"],
    DESTRUCTURING: ["extracts array items or object properties into separate bindings", "array items-ს ან object properties-ს ცალკე bindings-ში შლის"],
    SPREAD: ["expands iterable values or enumerable object properties into a new context", "iterable values-ს ან enumerable object properties-ს ახალ context-ში შლის"],
    "REST PARAMETER": ["collects remaining function arguments into an array", "function-ის დარჩენილ arguments-ს array-ში აგროვებს"],
    "TEMPLATE LITERAL": ["creates backtick-delimited strings with interpolation and multiple lines", "ქმნის backtick-ებით შემოსაზღვრულ string-ს interpolation-ითა და მრავალსტრიქონიანი ტექსტით"],
    SCOPE: ["defines the region in which a binding can be accessed", "განსაზღვრავს არეს, სადაც binding ხელმისაწვდომია"],
    CLOSURE: ["lets a function retain access to its outer lexical environment", "function-ს outer lexical environment-ზე წვდომას უნარჩუნებს"],
    HOISTING: ["describes how declarations are processed before their source line executes", "აღწერს declaration-ების დამუშავებას მათი source line-ის შესრულებამდე"],
    CALLBACK: ["is a function passed to other code to be invoked later", "არის function, რომელიც სხვა code-ს მოგვიანებით გამოსაძახებლად გადაეცემა"],
    PROMISE: ["represents the eventual fulfillment or rejection of an asynchronous operation", "asynchronous operation-ის მომავალ fulfillment-ს ან rejection-ს წარმოადგენს"],
    "ASYNC FUNCTION": ["always returns a Promise and enables await in its body", "ყოველთვის Promise-ს აბრუნებს და body-ში await-ის გამოყენებას რთავს"],
    AWAIT: ["suspends an async function until a Promise settles without blocking the thread", "async function-ს Promise-ის დასრულებამდე აჩერებს ისე, რომ thread არ დაბლოკოს"],
    "EVENT LOOP": ["coordinates the call stack with queued asynchronous jobs", "call stack-ს queued asynchronous jobs-თან ათანხმებს"],
    MICROTASK: ["runs a queued job after the current task and before the next task", "queued job-ს მიმდინარე task-ის შემდეგ და მომდევნო task-მდე ასრულებს"],
    CLASS: ["provides syntax for constructors, methods, and prototype-based inheritance", "constructor-ების, method-ებისა და prototype-based inheritance-ის syntax-ს იძლევა"],
    CONSTRUCTOR: ["initializes a newly created object instance", "ახლად შექმნილ object instance-ს საწყის მდგომარეობას ანიჭებს"],
    PROTOTYPE: ["provides delegated properties and methods through the prototype chain", "prototype chain-ით delegated properties-სა და methods-ს უზრუნველყოფს"],
    INHERITANCE: ["allows objects or classes to reuse behavior from another prototype", "objects-ს ან classes-ს სხვა prototype-ის ქცევის გამოყენების საშუალებას აძლევს"],
    MODULE: ["encapsulates file-scoped code with explicit imports and exports", "file-scoped code-ს explicit imports-ითა და exports-ით იზოლირებს"],
    EXPORT: ["makes a module binding available to other modules", "module binding-ს სხვა modules-ისთვის ხელმისაწვდომს ხდის"],
    IMPORT: ["creates access to bindings exported by another module", "სხვა module-ის exported bindings-ზე წვდომას ქმნის"],
    GENERATOR: ["defines a function that can pause, yield values, and resume", "ქმნის function-ს, რომელსაც შეჩერება, value-ის yield და გაგრძელება შეუძლია"],
    ITERABLE: ["implements Symbol.iterator so its values can be consumed sequentially", "Symbol.iterator-ს ახორციელებს, რათა values თანმიმდევრულად დამუშავდეს"],
    "WEAK MAP": ["stores object-keyed associations without preventing key garbage collection", "object-keyed associations-ს ისე ინახავს, რომ key-ის garbage collection-ს ხელს არ უშლის"]
  }
};

const QUESTION_LEVELS = ["easy", "medium", "hard", "epic"];

/* --- თეორიული კითხვების შექმნა --- */
function createTheoryQuestion(term, track, difficulty, language) {
  const trackName = track === "javascript" ? "JavaScript" : track.toUpperCase();
  const clue = EXAM_CLUES[track][term][language === "en" ? 0 : 1];
  const questions = {
    ka: {
      easy: `რომელი ${trackName} ცნება ${clue}?`,
      medium: `პრაქტიკულ front-end ამოცანაში საჭიროა ${trackName} ცნება, რომელიც ${clue}. რომელია სწორი პასუხი?`,
      hard: `Code review-ისას ამოიცანი ${trackName} ცნება, რომელიც ${clue}. რომელია ის?`,
      epic: `Standards-level კითხვაში რომელი ${trackName} ცნება ${clue}?`
    },
    en: {
      easy: `Which ${trackName} concept ${clue}?`,
      medium: `A practical front-end task needs a ${trackName} concept that ${clue}. Which one is correct?`,
      hard: `During code review, identify the ${trackName} concept that ${clue}.`,
      epic: `In a standards-level question, which ${trackName} concept ${clue}?`
    }
  };

  return questions[language][difficulty];
}

const WORDS = Object.entries(TRACK_TERMS).flatMap(([track, terms]) => (
  QUESTION_LEVELS.flatMap((difficulty) => (
    terms.map((word, index) => ({
      id: `${track}:${difficulty}:${index + 1}`,
      word,
      track,
      difficulty,
      hintKa: createTheoryQuestion(word, track, difficulty, "ka"),
      hintEn: createTheoryQuestion(word, track, difficulty, "en")
    }))
  ))
));

const LATIN_ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const MAX_MISTAKES = 6;

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
    guessWord: "გამოიცანი ცნება!",
    gameSubtitle: "იფიქრე მშვიდად — ყოველი კითხვა გამოცდისთვის გადადგმული ერთი ნაბიჯია.",
    lives: "სიცოცხლე",
    technology: "ტექნოლოგია",
    hintLabel: "თეორიული კითხვა:",
    keyboardLabel: "დააჭირე ასოს ეკრანზე ან კლავიატურაზე",
    useHint: "მინიშნება",
    newWord: "ახალი სიტყვა",
    score: "ქულა",
    wordsWon: "გამოცნობილი სიტყვა",
    bestStreak: "საუკეთესო სერია",
    nextWord: "შემდეგი სიტყვა",
    close: "დახურვა",
    howToPlay: "როგორ ვითამაშოთ?",
    helpIntro: "წაიკითხე თეორიული კითხვა და ასოებით გამოიცანი სწორი front-end ცნება. რაუნდის დასრულებამდე ექვსი შეცდომის უფლება გაქვს.",
    helpInput: "ეკრანისა და ფიზიკური კლავიატურის გამოყენება ნებისმიერ დროს შეგიძლია.",
    helpHint: "თუ გაიჭედე, მინიშნება ერთ ასოს გაგიხსნის.",
    helpHintPenalty: "თითო მინიშნება აკლებს: მარტივი −10, საშუალო −15, რთული −20, ეპიკური −30 ქულა.",
    helpDifficulty: "აირჩიე სირთულე ყოველი ახალი გამოწვევისთვის.",
    helpSession: "თითოეულ მიმართულებასა და დონეზე 50 კითხვაა; ამ სესიაში გამოყენებული კითხვა აღარ განმეორდება. შეცდომა ვარჯიშის ნაწილია, ქულა კი მხოლოდ პროგრესის მაჩვენებელი.",
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
    hintPenalty: (points) => `მინიშნება: −${points} ქულა`,
    soundOn: "ხმა ჩართულია",
    soundOff: "ხმა გამორთულია",
    sessionComplete: "ამ მიმართულებისა და დონის 50-ვე კითხვა უკვე გამოიყენე ამ სესიაში.",
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
    guessWord: "Identify the concept!",
    gameSubtitle: "Take your time—every question is one step closer to exam confidence.",
    lives: "Lives",
    technology: "Technology",
    hintLabel: "Theory question:",
    keyboardLabel: "Choose a letter on screen or use your keyboard",
    useHint: "Use a hint",
    newWord: "New word",
    score: "Score",
    wordsWon: "Words won",
    bestStreak: "Best streak",
    nextWord: "Next word",
    close: "Close",
    howToPlay: "How to play",
    helpIntro: "Read the theory question, then use letters to identify the correct front-end concept. You can make up to six mistakes before the round ends.",
    helpInput: "Switch between the onscreen and physical keyboard whenever you like.",
    helpHint: "If you get stuck, a hint can reveal one letter.",
    helpHintPenalty: "Each hint deducts: Easy −10, Medium −15, Hard −20, and Epic −30 points.",
    helpDifficulty: "Choose a difficulty for every new challenge.",
    helpSession: "Every track and difficulty has 50 questions; a question used during this session will not appear again. Mistakes are part of practice, and your score is only a progress signal.",
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
    hintPenalty: (points) => `Hint: −${points} points`,
    soundOn: "Sound is on",
    soundOff: "Sound is off",
    sessionComplete: "You have used all 50 questions for this track and difficulty during this session.",
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
  easy: { multiplier: 1, hintPenalty: 10 },
  medium: { multiplier: 1.5, hintPenalty: 15 },
  hard: { multiplier: 2, hintPenalty: 20 },
  epic: { multiplier: 3, hintPenalty: 30 }
};

/* --- თამაშის მდგომარეობა --- */
let selectedTrack = "html";
let selectedDifficulty = "easy";
let currentLanguage = localStorage.getItem("hangoLanguage") === "en" ? "en" : "ka";
let usedQuestionIds = new Set(readSessionQuestionIds());
let currentWord = getInitialQuestion();
let guessedLetters = new Set();
let mistakes = 0;
let hintsUsed = 0;
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

function readSessionQuestionIds() {
  try {
    return JSON.parse(sessionStorage.getItem("hangmanUsedQuestions") || "[]");
  } catch {
    return [];
  }
}

function saveSessionQuestionIds() {
  try {
    sessionStorage.setItem("hangmanUsedQuestions", JSON.stringify([...usedQuestionIds]));
  } catch {
    /* --- The game still works when session storage is unavailable --- */
  }
}

function getInitialQuestion() {
  let question = getNextWord();

  if (question) {
    return question;
  }

  for (const track of Object.keys(TRACK_TERMS)) {
    for (const difficulty of QUESTION_LEVELS) {
      selectedTrack = track;
      selectedDifficulty = difficulty;
      question = getNextWord();

      if (question) {
        return question;
      }
    }
  }

  usedQuestionIds.clear();
  saveSessionQuestionIds();
  selectedTrack = "html";
  selectedDifficulty = "easy";
  return getNextWord();
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
  const availableWords = getMatchingWords()
    .filter((entry) => !usedQuestionIds.has(entry.id));

  if (availableWords.length === 0) {
    return null;
  }

  const question = availableWords[Math.floor(Math.random() * availableWords.length)];

  usedQuestionIds.add(question.id);
  saveSessionQuestionIds();
  return question;
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
    const difficulty = DIFFICULTIES[selectedDifficulty];
    const grossScore = Math.round(baseScore * difficulty.multiplier);
    const totalHintPenalty = hintsUsed * difficulty.hintPenalty;
    const roundScore = Math.max(10, grossScore - totalHintPenalty);

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
  const nextWord = getNextWord();

  if (!nextWord) {
    showToast(t("sessionComplete"));
    return false;
  }

  currentWord = nextWord;
  guessedLetters = new Set();
  mistakes = 0;
  hintsUsed = 0;
  gameFinished = false;
  round += 1;

  renderKeyboard();
  renderGame();

  if (showMessage) {
    showToast(`${TRACKS[selectedTrack]} · ${t(selectedDifficulty)}`);
  }

  return true;
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
  const penalty = DIFFICULTIES[selectedDifficulty].hintPenalty;

  hintsUsed += 1;
  hintBox.classList.remove("is-flashing");
  void hintBox.offsetWidth;
  hintBox.classList.add("is-flashing");
  showToast(`${t("hintPenalty", penalty)} · ${t("hintRevealed")} “${revealedLetter}”`);
  makeGuess(revealedLetter);
}

function selectDifficulty(difficulty) {
  const previousDifficulty = selectedDifficulty;
  selectedDifficulty = difficulty;

  if (!startNewGame(true)) {
    selectedDifficulty = previousDifficulty;
    renderChoices();
  }
}

function selectTrack(track) {
  const previousTrack = selectedTrack;
  selectedTrack = track;

  if (!startNewGame(true)) {
    selectedTrack = previousTrack;
    renderChoices();
  }
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
  document.querySelector('meta[name="theme-color"]').content = isDark ? "#171a16" : "#4f6b3a";
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
