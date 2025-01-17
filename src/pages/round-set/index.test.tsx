import { render } from '@testing-library/react';
import { RecoilRoot } from 'recoil';

import RoundSetPage from './index.page';

describe('RoundSetPage', () => {
  const renderRoundSetPage = () => render((
    <RecoilRoot>
      <RoundSetPage />
    </RecoilRoot>
  ));

  it('"라운드를 설정해주세요" 문구가 나타나야만 한다', () => {
    const { container } = renderRoundSetPage();

    expect(container).toHaveTextContent('라운드를 설정해주세요');
  });
});
