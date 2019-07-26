import React from 'react';

import Container from '../Container';
import ButtonOut from '../ButtonOut';
import DSICCImage from '../DSICCImage';
import TMobileLogo from '../TMobileLogo';
import H2 from '../H2';
import P from '../P';

function Sponsors() {
  
  return (
    <Container>
    <div class="top-clearance-xl bottom-clearance">
        <div class="centermax">
          	<H2><span class="red-text">
          		Sponsors
          		</span>
          	</H2>
        </div>
        <div class="centermax">
          	<div class="keep-50w">
          		<TMobileLogo />
	          	<P class="centermax"><span class="red-text">
	            	Founding Sponsor
	            	</span>
	          	</P>
              <ButtonOut href="http://minorityvets.org/sponsorelr/" target="_blank" rel="noopener" >
                Become a Sponsor
              </ButtonOut>
          </div>
        </div>
    </div>
    </Container>
  );
}

export default Sponsors;