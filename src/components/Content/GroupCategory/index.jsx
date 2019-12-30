import React from 'react';
import Category from './Category';
import _ from 'lodash';
import { listCategories, listQuestion } from '../../../../src/data/index.js';

class GroupCategory extends Component {
  constructor(props){
    super(props)
    this.state = {
        listCategories: [],
        listQuestion: []
    }
  }

  componentDidMount() {
    this.setState(() => {
      return {
        listCategories: this.state.listCategories.concat(listCategories),
        listQuestion: this.state.listQuestion.concat(listQuestion)
      }
    })
  }

  render() {
    return (
      <div className="groupCategory">
        {this.state.listCategories.map((category, index) => (
          <Category
            key={index}
            category={category}
            questions={_.filter(this.state.listQuestion, { 'idCat':category.id })}
          />
        ))}
      </div>
    );
  }
}

export default GroupCategory;
