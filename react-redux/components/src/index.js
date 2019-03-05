import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail
                    author="Alex"
                    timeAgo="Today at 4:45PM"
                    content="Nice blog 4 post"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail author="Sam"
                    timeAgo="Today at 5:45PM"
                    content="Nice blog 5 post"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail author="John"
                    timeAgo="Today at 6:45PM"
                    content="Nice blog 6 post"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>


        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));
