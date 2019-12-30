import React from 'react'
import Question from './Question/index';

const Category = props => (
    <div className="col-md-6">
        <div className="categoryTable">
            <div className="categoryTitle">{props.category.name}</div>
            {props.questions.map((question, index) => <Question key={index} textQuestion={question.textQuestion}/>)}
        </div>
    </div>
);

export default Category;
