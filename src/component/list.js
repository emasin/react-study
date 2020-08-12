import React from "react";
import ListItem from "./list-item";
class List extends React.Component {
    render() {
        const data = this.props.data;
        const lists = [
            {
                id: 1,
                bigtext: '유창한 영어의 기본요소',
                smtext: '유창한 영어로 대화하며 자신감을 키워보세요. 간단한 대화부터 복잡한 시사 문제에 대해 논리정연한 의견을 표현하는 것까지, 다양한 레벨의 과정을 통해 모두가 무언가를 배울 수 있습니다.'
            },
            {
                id: 2,
                bigtext: '경력 개발',
                smtext: '해외 환경에서 비즈니스 관련 대화를 하려면 유창한 영어 실력만으로는 부족합니다. 언어와 비언어로 이루어진 다문화 커뮤니케이션은 경력 개발의 강력한 도구입니다.'
            },
            {
                id: 3,
                bigtext: '자신을 표현해보세요',
                smtext: '영어를 배우면 전 세계 사람들과 더 쉽게 교류할 수 있습니다. 요즘 화두가 되는 다양한 주제를 탐색하면서 특정 분야 어휘를 확장하고, 다른 문화와 관점에 대해 배워보세요!'
            }
        ];
        return (
            <>
            <div style={{padding:'32px'}}>
                <div style={{margin:'0 10px'}}>
                    <h4 className="subtit">{lists[0].bigtext}</h4>
                    <p className="subtxt">{lists[0].smtext}</p>
                </div>
                <div style={{overflow:'hidden',overflowX:'auto', marginTop:'10px'}}>
                    <div className="card-list" >
                        {data.map((contact, i) => {
                        return (
                        <ListItem index={i} data={contact}></ListItem>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div style={{padding:'32px'}}>
                <div style={{margin:'0 10px'}}>
                    <h4 className="subtit">{lists[1].bigtext}</h4>
                    <p className="subtxt">{lists[1].smtext}</p>
                </div>
                <div style={{overflow:'hidden',overflowX:'auto', marginTop:'10px'}}>
                    <div className="card-list" >
                        {data.map((contact, i) => {
                            return (
                                <ListItem index={i} data={contact}></ListItem>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div style={{padding:'32px'}}>
                <div style={{margin:'0 10px'}}>
                    <h4 className="subtit">{lists[2].bigtext}</h4>
                    <p className="subtxt">{lists[2].smtext}</p>
                </div>
                <div style={{overflow:'hidden',overflowX:'auto', marginTop:'10px'}}>
                    <div className="card-list" >
                        {data.map((contact, i) => {
                            return (
                                <ListItem index={i} data={contact}></ListItem>
                            )
                        })}
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default List;