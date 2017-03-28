// Hash the array and compare the arrays!
// Key
// a = small apple .small
// A = apple
// o = small orange, .small
// O = orange
// p = small pickle, .small
// P = pickle
// () = plate open / close
// {} = fancy plate open / close
// [] = bento open close tags

strings['fr'] = {
  'table'  : 'table',
  'apple'  : 'pomme',
  'orange' : 'orange',
  'pickle' : 'cornichon',
  'plate'  : 'assiette',
  'bento'  : 'bento',
  'fancy'  : 'luxe',
  'small'  : 'petite',
  
  /* ui */
  
  "Level {0} of {1}" : 'Niveau {0} sur {1}',
  'str1' : "Pas de soucis, voilà de l'aide!",
  'str2' : "Nous allons apprendre les sélecteurs CSS !\nGrâce à eux, nous allons choisir sur quel(s) élément(s) appliquer des styles CSS.",
  'str3' : "Annexe 1 - Une règle CSS",
  'str4' : 'Dans cet exemple, le sélecteur est "p" (sélectionne tous les éléments &lt;p&gt;) et il applique le style margin-bottom.',
  'str5' : "Pour jouer, il suffit d'écrire un sélecteur CSS dans l'éditeur ci-dessous. Le but est de sélectionner les bons objets sur la table. Le niveau suivant est débloqué lorsqu'une réponse correcte est donnée.",
  'str6': "En passant la souris par dessus les objets posés sur la table, leur code HTML s'affiche.",
  'str7': "De l'aide est disponible sur la droite.! &rarr;",
  'str8': "Ok, compris !",
  'str9': "Au secours, je suis coincé!",
  'str10': "<div class='file-name'>style.css</div> Editeur CSS",
  'str11': "Ecris un sélecteur CSS",
  'str12': "entrer",
  'str13': "{<br/>/* Les styles s'écrivent ici. */<br/>}",
  'str14': '<br/>/* <br/>Taper un nombre ouvre le niveau correspondant.<br/>Ex &rarr; "5" pour le niveau 5 <br/>*/',
  'str15': "<div class='file-name'>table.html</div> Visionneuse HTML",
  'str16': "Qu'est-ce que c'est ?",
  'str17': "Voici un petit jeu pour apprendre les sélecteurs CSS plus facilement. Ecris le bon sélecteur pour passer au niveau. De l'aide est disponible sur la droite."
}

levels['fr'] = [
  {
    helpTitle : "Sélectionne les elements du type donné",
    selectorName : "Sélecteurs de type",
    doThis : "Sélectionne les assiettes",
    selector : "plate",
    syntax : "A",
    help : "Sélectionne tous les éléments de type <strong>A</strong>. Le type se rapporte à la balise, donc <tag>div</tag>, <tag>p</tag> ou <tag>ul</tag> sont tous des types d'élément différents.",
    examples : [
      '<strong>div</strong> sélectionne tous les éléments <tag>div</tag>.',
      '<strong>p</strong> sélectionne tous les éléments <tag>p</tag>.',
      ],
    board: "()()"
  },
  {
    doThis : "Sélectionne les boites bento",
    selector : "bento",
    syntax : "A",
    helpTitle : "Sélectionne les elements du type donné",
    selectorName : "Sélecteurs de type",
    help : "Sélectionne tous les éléments de type <strong>A</strong>. Le type se rapporte à la balise, donc <tag>div</tag>, <tag>p</tag> ou <tag>ul</tag> sont tous des types d'élément différents.",
    examples : [
      '<strong>div</strong> sélectionne tous les éléments <tag>div</tag>.',
      '<strong>p</strong> sélectionne tous les éléments <tag>p</tag>.',
      ],
    board: "[]()[]"
  },
  {
    doThis : "Selectionne l'assiette de luxe",
    selector : "#fancy",
    selectorName: "Sélecteurs d'identifiant",
    helpTitle: "Sélectionne les éléments avec un ID",
    syntax: "#id",
    help : 'Permet de sélectionner les éléments possédant l\' attribut d\'<strong>id</strong> correspondant. Peut également se combiner avec le sélecteur d\'élément.',
    examples : [
      '<strong>#cool</strong> sélectionne tous les <strong>id="cool"</strong>',
      '<strong>ul#long</strong> sélectionne tous les <strong>&lt;ul id="long"&gt;</strong>'
    ],
    board: "{}()[]"
  },
  {
    helpTitle: "Sélectionne un élément à l'intérieur d'un autre élément",
    selectorName : "Sélecteur de descendant",
    doThis : "Sélectionne la pomme dans l'assiette",
    selector : "plate apple",
    syntax: "A&nbsp;&nbsp;B",

    help : "Permet de sélectionner tous les éléments <strong>B</strong> à l'intérieur de <strong>A</strong>. Ici <strong>B</strong> est considéré comme un descendant, ce qui signifie qu'il est contenu dans un autre élément.",
    examples : [
      '<strong>p&nbsp;&nbsp;strong</strong> sélectionne tous les <strong>&lt;strong&gt;</strong> qui sont un descendant d\'un <strong>&lt;p&gt;</strong>',
      '<strong>#fancy&nbsp;&nbsp;span</strong> séléctionne tous les <strong>&lt;span&gt;</strong> qui sont un descendant de n\'importe quel élément avec un <strong>id="fancy"</strong>',
    ],
    board: "[](A)A"
  },
  {
    doThis : "Séléctionne le cornichon sur l'assiette de luxe",
    selector : "#fancy pickle",
    helpTitle: "Combine les sélecteurs de type de d'ID",
    syntax: "#id&nbsp;&nbsp;A",
    help : 'Il est possible de combiner n\'importe quel sélecteur avec le sélecteur de descendant.',
    examples : [
      '<strong>#cool&nbsp;span</strong> sélectionne tous les éléments <strong>&lt;span&gt;</strong> compris à l\'intérieur d\'éléments avec un <strong>id="cool"</strong>'
    ],
    board: "[O]{P}(P)"
  },
  {
    doThis : "Séléctionne les petites pommes",
    selector : ".small",
    selectorName: "Sélecteurs de classe",
    helpTitle: "Séléctionne les éléments par leur classe",

    syntax: ".nomdeclasse",
    help : 'Le sélecteurs de classe permet de sélectionner tous les éléments possédant l\'attribut de <strong>class</strong> correspondant. Les éléments ne peuvent avoir qu\'un ID, mais plusieurs classes.',
    examples : [
    '<strong>.propre</strong> séléctionne tous les élément avec la <strong>class="propre"</strong>'
    ],

    board: "Aa(a)()"
  },
  {
    doThis : "Séléctionne les petites oranges",
    selector : "orange.small",
    helpTitle: "Combine le sélecteur de classe",
    syntax: "A.nomdeclasse",
    help : 'Le sélecteur de classe peut-être combiné avec d\'autres sélecteurs, comme celui de type.',
    examples : [
      '<strong>ul.important</strong> sélectionne tous les éléments <strong>&lt;ul&gt;</strong> qui ont une <strong>class="important"</strong>',
      '<strong>#big.wide</strong> sélectionne tous les éléments avec une <strong>id="big"</strong> qui ont aussi une <strong>class="wide"</strong>'
    ],
    board: "Aa[o](O)(o)"
  },
  {
    doThis : "Séléctionne les petites oranges dans les bentos",
    selector : "bento orange.small",
    syntax: "Un petit effort :)",
    helpTitle: "Tu peux le faire...",
    help : 'Combine tout ce que tu as appris dans les niveaux précédents pour résoudre celui-ci!',
    board: "A(o)[o][a][o]"
  },
  {
    doThis : "Séléctionne toutes les assiettes et tous les bentos",

    selector : "plate,bento",
    selectorName : "Sélécteurs multiples",
    helpTitle: "Combine des sélecteurs avec des... virgules!",
    syntax : "A, B",
    help : 'Permet de sélectionner tous les éléments <strong>A</strong> et <strong>B</strong>. Tous les sélecteurs peuvent être combinés ainsi, et il est possible d\'en déclarer plus que deux.',
    examples: [
    '<strong>p, .fun</strong> sélectionne tous les éléments <tag>p</tag> et tous ceux qui ont une <strong>class="fun"</strong>',
    '<strong>a, p, div</strong> sélectionne tous les éléments <tag>a</tag>, <tag>p</tag> et <tag>div</tag>'
    ],
    board: "pP(P)[P](P)Pp"
  },
  {
    doThis : "Séléctionne tout!",
    selector : "*",
    selectorName:  "Le Sélecteur Universel!",
    helpTitle: "Tu peux tout sélectionner!",
    syntax : "*",
    help : 'Le sélecteur universel permet de sélectionner tous les éléments existants! ',
    examples : [
      '<strong>p *</strong> sélectionne tous les éléments à l\'intérieur d\'éléments <strong>&lt;p&gt;</strong>.'
    ],
    board: "A(o)[][O]{)"
  },
  {
    doThis : "Séléctionne tout ce qu'il y a sur une assiette",
    selector : "plate *",
    syntax : "A&nbsp;&nbsp;*",
    helpTitle: "Combine le sélecteur universel",
    help : 'pour séléctionner tous les élements à l\'intérieur de <strong>A</strong>.',
    examples : [
      '<strong>p *</strong> sélectionne tous les éléments à l\'intérieur des <strong>&lt;p&gt;</strong>.',
      '<strong>ul.fancy *</strong> sélectionne tous les éléments à l\'intérieur de tous les <strong>&lt;ul</strong> avec une <strong>class="fancy"&gt;</strong>.'
    ],
    board: "{o}(P)a(A)"
  },
  {
    doThis : "Séléctionne toutes les pommes qui se trouvent à coté d'une assiette",
    selector : "plate + apple",
    helpTitle: "Séléctionne le premier élément situé directement à la suite d'un autre",
    selectorName: "Sélecteur de voisin direct",
    syntax : "A + B",
    help : "Permet de sélectionner tous les éléments <strong>B</strong> qui suivent directement un élément <strong>A</strong>. Des éléments qui se suivent sont appelés éléments voisins. Ils se trouvent sur le même niveau, ou profondeur. <br/><br/>Dans le code HTML de ce niveau, les éléments ayant une indentation identique sont voisins.",
    examples : [
      '<strong>p + .intro</strong> sélectionne tous les éléments avec une <strong>class="intro"</strong> qui suivent directement un <tag>p</tag>',
      '<strong>div + a</strong> sélectionne tous les éléments <tag>a</tag> qui suivent directement un <tag>div</tag>'
    ],
    board: "[a]()a()Aaa"
  },
  {
    selectorName: "Sélecteurs de voisins",
    helpTitle: "Séléctionne les voisins d'un autre élément",
    syntax: "A ~ B",
    doThis : "Séléctionne tous les cornichons situés à droite d'un bento",
    selector : "bento ~ pickle",
    help : "Permet de sélectionner tous les voisins suivants un élément donné. Il agit comme le sélecteur de voisin direct (A + B) à la différence qu'il cible tous les voisins suivant au lieu du premier uniquement.",
    examples : [
      '<strong>A ~ B</strong> sélectionne tous les éléments <strong>B</strong> partageant le même parent qu\'un <strong>A</strong>'
    ],
    board: "P[o]pP(P)(p)"
  },
  {
    selectorName: "Sélecteur d'enfant",
    syntax: "A > B&nbsp;",
    doThis : "Séléctionne la pomme dans l'assiette",
    selector : "plate > apple",
    helpTitle: "Séléctionne l'enfant direct d'un élément",
    help : "Permet de sélectionner des éléments imbriqués dans d'autres éléments. Un élément enfant est un élément imbriqué directement dans un autre. <br><br>Ceux qui sont imbriqués plus profondément sont appelés descendants.",
    examples : [
      '<strong>A > B</strong> sélectionne tous les éléments <strong>B</strong> qui sont des descendants directs (enfants) de <strong>A</strong>'
    ],
    board: "([A])(A)()Aa"
  },
  {
    selectorName: "Pseudo-classe First Child",
    helpTitle: "Séléctionne le premier enfant d'un autre élément",
    doThis : "Séléctionne l'orange du dessus",
    selector : "plate :first-child",
    syntax: ":first-child",

    help : "Permet de sélectionner le premier enfant. Un élément enfant est un élément imbriqué directement dans un autre. Cette pseudo-classe est combinable avec d'autres sélécteur.",
    examples : [
      '<strong>:first-child</strong> séléctionne tous les premiers enfants du document.',
      '<strong>p:first-child</strong> séléctionne tous les premiers enfants de <strong>&lt;p&gt;</strong>.',
      '<strong>div p:first-child</strong> séléctionne tous les premiers enfants de <strong>&lt;p&gt;</strong> situés dans un <strong>&lt;div&gt;</strong>.'
    ],
    board: "[]()(OOO)p"
  },
  {
    selectorName: "Pseudo-classe Only Child",
    helpTitle: "Séléctionne l'unique élément imbriqué à l'intérieur d'un autre.",
    doThis : "Séléctionne la pomme et le cornichon sur les assiettes",
    selector : "plate :only-child",
    syntax: ":only-child",
    help : "Permet de sélectionner l'élément qui est le seul enfant de son parent.",
    examples : [
      '<strong>span:only-child</strong> séléctionne les <strong>&lt;span&gt;</strong> qui sont les uniques enfants de leur parent.',
      '<strong>ul li:only-child</strong> séléctionne les <strong>&lt;li&gt;</strong> qui est sont les uniques enfants de <strong>&lt;ul&gt;</strong>.'
    ],
    board: "(A)(p)[]P(oO)p"
  },
  {
    selectorName: "Pseudo-classe Last Child",
    helpTitle: "Séléctionne le dernier enfant à l'intérieur d'un élément",
    doThis : "Séléctionne la petite pomme et le cornichon",
    selector : ".small:last-child",
    syntax: ":last-child",
    help : "Permet de sélectionner le dernier enfant à l'intérieur d'un élément. <br><br>Pro Tip &rarr; Quand il n'y a qu'un seul enfant, il compte à la fois en tant que premier, unique, et dernier enfant!",
    examples : [
      '<strong>:last-child</strong> séléctionne tous les derniers enfants.',
      '<strong>span:last-child</strong> séléctionne tous les derniers enfants qui sont des <strong>&lt;span&gt;</strong>.',
      '<strong>ul li:last-child</strong> sélectionne le dernier <strong>&lt;li&gt;</strong> à l\'intérieur d\'un <strong>&lt;ul&gt;</strong>.'
    ],
    board: "{a)()(oO)p"
  },
  {
    selectorName: "Pseudo-classe Nth Child",
    helpTitle: "Séléctionne un élément selon sa position dans un autre",
    doThis : "Séléctionne la 3ème assiette",
    selector : ":nth-child(3)",
    syntax: ":nth-child(A)",

    help : "Permet de sélectionner le <strong>n<sup>ième</sup></strong> (Ex: 1<sup>er</sup>, 3<sup>ème</sup>, 12<sup>ème</sup> etc.) enfant dans son parent.",
    examples : [
      '<strong>:nth-child(8)</strong> séléctionne tous les 8<sup>ème</sup> enfants d\'un autre élément.',
      '<strong>div p:nth-child(2)</strong> séléctionne le second <strong>p</strong> de chaque <strong>div</strong>',
    ],
    board: "()()(){}"
  },
  {
    selectorName: "Pseudo-classe Nth Last Child",
    helpTitle: "Séléctionne un élément selon sa position dans un autre, en comptant depuis la fin",
    doThis : "Séléctionne le premier bento",
    selector : "bento:nth-last-child(4)",
    syntax: ":nth-last-child(A)",
    help : "Permet de sélectionner un élément depuis le bas de son parent. Fonctionne comme <strong>:nth-child</strong>, mais en partant de la fin !",
    examples : [
      '<strong>:nth-last-child(2)</strong> sélectionne tous les avant-derniers éléments.'
    ],
    board: "()[]a(OOO)[]"
  },
  {
    selectorName: "Pseudo-classe First of Type",
    helpTitle: "Séléctionne le premier élémement du type spécifié",
    doThis : "Séléctionne la première pomme",
    selector : "apple:first-of-type",
    syntax: ":first-of-type",
    help : "Permet de sélectionner, dans son parent, le premier élément du type spécifié.",
    examples : [
      '<strong>span:first-of-type</strong> séléctionne le premier <strong>&lt;span&gt;</strong> imbriqué dans un autre élément.'
    ],
    board: "Aaaa(oO)"
  },
  {
    selectorName: "Pseudo-classe Nth of Type",
    // helpTitle: "Nth of Type Selector",
    doThis: "Séléctionne toutes les assiettes paires",
    selector: "plate:nth-of-type(even)",
    syntax: ":nth-of-type(A)",
    help: "Permet de sélectionner un élément spécifique selon son type et la fréquence dans lequel il apparait dans un autre élément - il est possible d'écrire un nombre, ou de choisir comme valeur pair (<strong>even</strong>) ou impair (<strong>odd</strong>).",
    examples: [
      '<strong>div:nth-of-type(2)</strong> séléctionne la 2e apparition d\'un <strong>div</strong> dans son parent.',
      '<strong>.exemple:nth-of-type(odd)</strong> séléctionne tous les <strong>class="exemple</strong> impairs.'
    ],
    board: "()()()(){}()"
  },
  {
    selectorName: "Pseudo-classe Nth-of-type",
    // helpTitle: "Nth-of-type Selector with formula",
    doThis: "Séléctionne une assiette sur deux, à partir de la 3ème",
    selector: "plate:nth-of-type(2n+3)",
    syntax: ":nth-of-type(An+B)",
    help: "La formule nth-of-type permet de sélectionner chaque n<sup>ième</sup> élément, en commençant le décompte à un point spécifique.",
    examples: [
      '<strong>span:nth-of-type(6n+2)</strong> sélectionne chaque 6e apparition d\'un <tag>span</tag>, en commençant par la deuxième (comprise).'
    ],
    board: "()(p)(a)()(A)()"
  },

  {
    selectorName: "Pseudo-classe Only of Type",
    helpTitle: "Sélectionne les éléments qui n'ont pas de voisin de leur type dans leur parent",
    selector : "apple:only-of-type",
    syntax: ":only-of-type",
    doThis : "Séléctionne la pomme de l'assiette du milieu.",
    help : "Permet de sélectionner un élément qui ne possède aucun voisin du même type dans son parent",
    examples : [
      '<strong>p span:only-of-type</strong> sélectionne un <tag>span</tag> contenu dans un <tag>p</tag> s\'il ne contient pas d\'autre <tag>span</tag>.'
    ],
    board: "(aA)(a)(p)"
  },

  {
    selectorName: "Pseudo-classe Last of Type",
    helpTitle: "Séléctionne le dernier élément du type défini",
    doThis : "Séléctionne la 2e pomme et orange",
    selector : ".small:last-of-type",
    syntax: ":last-of-type",
    help : "Permet de sélectionner chaque dernier élément du type spécifié dans son parent. Le type se rapporte au tag HTML, donc <tag>p</tag> et <tag>span</tag> sont de types différents. <br><br> Je me demande si c'est ainsi qu'a été choisi le dernier dinosaure avant son extinction.",
    examples : [
      '<strong>div:last-of-type</strong> sélectionne le dernier <strong>&lt;div&gt;</strong> dans chaque élément.',
      '<strong>p span:last-of-type</strong> sélectionne le dernier <strong>&lt;span&gt;</strong> de chaque <strong>&lt;p&gt;</strong>.'
    ],
    board: "ooPPaa"
  },
  {
    selectorName: "Sélecteur vide",
    helpTitle: "Séléctionne les éléments sans enfants",
    doThis : "Séléctionne les bentos vides",
    selector : "bento:empty",
    syntax: ":empty",
    help : "Permet de sélectionner les éléments qui ne contiennent absolument rien.",
    examples : [
      '<strong>div:empty</strong> sélectionne tous les éléments <strong>&lt;div&gt;</strong> entièrement vides.'
    ],
    board: "[][p][][]"
  },
  {
    selectorName: "Pseudo-classe de négation",
    helpTitle: "Séléctionne tous les éléments qui ne correspondent pas à la condition de négation",

    doThis : "Séléctionne les grandes pommes",
    selector : "apple:not(.small)",
    syntax: ":not(X)",
    help : 'Permet de sélectionner tous les éléments qui ne correspondent pas à la condition de négation <strong>"X"</strong>.',
    examples : [
      '<strong>:not(#fancy)</strong> séléctionne tous les éléments qui ne possède pas <strong>id="fancy"</strong>.',
      '<strong>div:not(:first-child)</strong> séléctionne chaque <tag>div</tag> qui n\'est pas un premier enfant.',
      '<strong>:not(.big, .medium)</strong> séléctionne tous les éléments qui ne possèdent pas <strong>class="big"</strong> ou <strong>class="medium"</strong>.'
    ],
    board: "{a}(A)A(o)p"
  }
];
