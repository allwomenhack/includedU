Survey.Survey.cssType = "bootstrap";
Survey.defaultBootstrapCss.navigationButton = "btn btn-green";
var myCss = {
    matrix: {root: "table table-striped"},
    navigationButton: "button btn-lg"   
};
window.survey = new Survey.Model({questions: [
{ type: "matrix", name: "Quality", title: "Please indicate if you agree or disagree with the following statements",
   columns: [{ value: 1, text: "Strongly Disagree" }, 
              { value: 2, text: "Disagree" }, 
              { value: 3, text: "Neutral" }, 
              { value: 4, text: "Agree" }, 
              { value: 5, text: "Strongly Agree" }],
    rows: [{ value: "affordable", text: "Do you feel excluded in the classroom?" }, 
           { value: "does what it claims", text: "Are you out numbed by the men in your computer science classes?" },
           { value: "better then others", text: "Do the other men in your class make you feel like you are not as good of a programer because you are a woman?" }, 
           { value: "easy to use", text: "Do your professors favor other male students instead of you because they do not think that women should be in computer science?" },
            { value: "affordable", text: "Are you treated differently because you are a woman and a women of color in your computer science classes?" }, 
            { value: "affordable", text: "Do you the men in your classroom make you feel belittled because you are a woman who is pursuing computer science? " }
          
           
           ]}
]});
survey.onComplete.add(function(result) {
    document.querySelector('#surveyResult').innerHTML = "result: " + JSON.stringify(result.data);
});


$("#surveyElement").Survey({ 
    model: survey ,css: myCss

});

