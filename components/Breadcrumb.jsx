import 'twin.macro';

export default function Breadcrumb({ crumbs, selected }) {
  function isLast(index) {
    return index === crumbs.length - 1;
  }

  return (
    <ul tw='flex gap-3.5 justify-center mt-4 border-2 max-w-sm mx-auto p-4 rounded'>
      {crumbs.map((crumb, i) => {
        const disabled = isLast(i) ? 'disabled' : '';
        return (
          <li key={i}>
            <button
              tw='flex items-center gap-4 text-blue-500 font-semibold'
              onClick={() => selected(crumb)}
              style={{ color: disabled && 'gray' }}
            >
              {crumb}
              <span>{!disabled && '/'}</span>
            </button>
          </li>
        );
      })}
    </ul>
  );
}
