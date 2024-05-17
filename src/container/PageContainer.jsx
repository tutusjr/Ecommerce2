import PropTypes from 'prop-types';

export default function PageContainer({children}) {
  return (
    <div className="w-3/4 m-auto">{children}</div>
  )

}

PageContainer.propTypes = {
    children: PropTypes.node
}
