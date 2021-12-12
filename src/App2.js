import './App.css'
import List from './Preview/PreviewList/List';

const App = () => {
    const forms = [
        {
            id: 1,
            label: 'Hello',
            isActive: true,
        },
        {
            id: 2,
            label: 'Final',
            isActive: true,
        },
        {
            id: 3,
            label: 'Happy Family',
            isActive: false,
        },
        {
            id: 4,
            label: 'Brad Pitt',
            isActive: true,
        },
        {
            id: 5,
            label: 'Godzilla vs KingKong and their stories',
            isActive: true,
        },
        {
            id: 6,
            label: 'DragonBall, Naruto, One Piece',
            isActive: true,
        },
        {
            id: 7,
            label: 'Crazy Monkey and ten more crazy monkeys',
            isActive: true,
        }
    ]
    return <div className="App">
        <List forms = {forms}></List>
    </div>
}

export default App;