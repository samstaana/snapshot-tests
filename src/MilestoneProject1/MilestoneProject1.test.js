import MilestoneProject1 from './MilestoneProject1'
import renderer from 'react-test-renderer'

test('renders a snapshot', () => {
  const tree = renderer.create(<MilestoneProject1/>).toJSON()
  expect(tree).toMatchSnapshot()
})