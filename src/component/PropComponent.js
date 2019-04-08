import React, {Component} from 'react';
import PropTypes from 'prop-types';

 class PropComponent extends Component{
   static defaultProps = {
      name : '기본 이름'
      ,age : 30 // 제거 시 에러(isRequired)
   }
   static propTypes = {
      name : PropTypes.arrayOf(PropTypes.string)
      ,age : PropTypes.number.isRequired
   }
   render(){
       return(
          <div>
              <p>안녕하세요, 제이름은 {this.props.name} 입니다.</p>
              <p>나이는 {this.props.age}살 입니다.</p>
           </div> 
        )
   }
}
// PropComponent.defaultProps= {
//    // name : 'default name'
// }

// PropComponent.propTypes = {
//    name : PropTypes.string
// }

 export default PropComponent;
