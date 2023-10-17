
import {Paginator} from "./Paginator";


describe('paginator component test', () => {

    test('pages count is 11 but should be showed only 10', () => {
        const ReactTestRenderer = require('react-test-renderer');
        const component = ReactTestRenderer.create(<Paginator
            currentPage={1}
            totalItemsCount={11}
            pageSize={1}
            portionSize={10}
            onPageChanged={() => {
        }}/>)
        // eslint-disable-next-line testing-library/await-async-query
        const spans = component.root.findByType('button')
        expect(spans.length).toBe(1)
    })
})