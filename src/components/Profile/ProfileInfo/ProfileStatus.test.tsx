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
    test('after creation span should be displayed ', () => {
        const ReactTestRenderer = require('react-test-renderer');
        const component = ReactTestRenderer.create(<ProfileStatus active={false} status={'you'} updateStatus={() => {
        }}/>)
        // eslint-disable-next-line testing-library/await-async-query
        const span = component.root.findByType('span')
        expect(span).not.toBeNull()
    })
    test('after creation input shouldn`t be displayed', () => {
        const ReactTestRenderer = require('react-test-renderer');
        const component = ReactTestRenderer.create(<ProfileStatus active={false} status={'you'} updateStatus={() => {
        }}/>)
        // eslint-disable-next-line testing-library/await-async-query
        expect(() => {
            // eslint-disable-next-line testing-library/await-async-query
            component.root.findByType('input')
        }).toThrow()
    })
    test('after creation span should be displayed with corect status', () => {
        const ReactTestRenderer = require('react-test-renderer');
        const component = ReactTestRenderer.create(<ProfileStatus active={false} status={'you'} updateStatus={() => {
        }}/>)
        // eslint-disable-next-line testing-library/await-async-query
        const span = component.root.findByType('span')
        expect(span.children[0]).toBe('you')
    })
    test("input should be displayed in editMode", () => {
        const ReactTestRenderer = require('react-test-renderer');
        const component = ReactTestRenderer.create(<ProfileStatus active={false} status={'you'} updateStatus={() => {
        }}/>)
        // eslint-disable-next-line testing-library/await-async-query
        let span = component.root.findByType('span')
        span.props.onClick();
        // eslint-disable-next-line testing-library/await-async-query
        let input = component.root.findByType('input')
        expect(input.props.value).toBe('you')
    })
    test("callback should be called", () => {
        const ReactTestRenderer = require('react-test-renderer');
        const mockCallback = jest.fn()
        const component = ReactTestRenderer.create(<ProfileStatus active={false} status={'you'}
                                                                  updateStatus={mockCallback}/>)
        // eslint-disable-next-line testing-library/await-async-query
        let instance = component.getInstance()
        instance.deactivateInput()
        expect(mockCallback.mock.calls.length).toBe(1)
    })
})