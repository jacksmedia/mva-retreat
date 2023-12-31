import React from 'react';

import Container from '../Container';
import ButtonOut from '../ButtonOut';
import TMobileLogo from '../TMobileLogo';
import H2 from '../H2';
import H3 from '../H3';

function Sponsors() {
  
  return (
    <Container>
    <div class="top-clearance-xl bottom-clearance">
        <div class="centermax">
          	<H2>
              <span class="red-text">
          		Founding Sponsor
          		</span>
          	</H2>
        </div>
        <div class="centerpad">
        	<TMobileLogo />
        </div>
        <div class="centerpad">
          <div class="keep-50w">
            <H2>
              <span class="red-text">   
              Individual Donors
              </span>
            </H2>
            <H3><span class="navy-text">Robert White</span></H3>
            <H3><span class="navy-text">Bill Kirst</span></H3>
          </div>
        </div>
        <div class="centerpad">
          <ButtonOut href="http://minorityvets.org/sponsorelr/" target="_blank" rel="noopener noreferrer" >
            Become a Sponsor
          </ButtonOut>
        </div>
    </div>
    </Container>
  );
}

export default Sponsors;