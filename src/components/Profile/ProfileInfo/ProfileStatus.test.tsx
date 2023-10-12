import {ProfileStatus} from "./ProfileStatus";
import ReactTestRenderer from "react-test-renderer";

describe("ProfileStatus component", () => {
    test('status from props should be in the state', () => {
        const ReactTestRenderer = require('react-test-renderer');
        const component = ReactTestRenderer.create(<ProfileStatus active={false} status={'you'} updateStatus={() => {
        }}/>)
        const instance = component.getInstance();
        expect(instance.state.status).toBe('you')
    })
    test('after creation span should be displayed with corect status',()=>{
        const ReactTestRenderer = require('react-test-renderer');
        const component = ReactTestRenderer.create(<ProfileStatus active={false} status={'you'} updateStatus={() => {
        }}/>)
        const span = component.root.findByType('span');

        expect(span.length).toBe(1)
    })
})