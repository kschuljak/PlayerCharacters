import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Row, Col, Image, Card, Container } from 'react-bootstrap'
import characters from '../characters';

const CharacterScreen = () => {
 
  const params = useParams();

  const character = characters.find((p) => p._id === params.id)

  

  return(
    <>
      <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>

      <Container>
      <Card>
      <Row xs={1} md={2} className="g-4">  {/* start card grid */}
      <Col>



{/* NEW CARD */}
      <Card>  {/* Character intro card */}
        <Row>
          <Col>
            <Image src={character.image} alt={character.name} fluid />
          </Col>
        </Row>
      </Card>




{/* NEW CARD */}

<Card body>
        <Row>          
          <Col>
            <Row>  {/* character nickname only displayed if not null */}
              <span><h3>{character.name}</h3> {character.nickname != null && <>(aka {character.nickname})</>}</span>
            </Row>
            <br></br>

            <hr/>

            <Row>
              <span>{character.race} - {character.alignment}</span>
            </Row>
            <Row>  {/* character subclass only displayed if not null */}
              <span>Lvl {character.level} {character.class} {character.subclass != null && <>- {character.subclass}</>}</span>
            </Row>
            <Row>
              <span>{character.background}</span>
            </Row>

            <hr/>

            <Row>
              <p> {character.description} </p>
            </Row>
  
            <hr/>

            <Row>  {/* Misc character stats  */}
              <Col sm={2}></Col>
              <Col sm={4} class='align-items-center'>
          
                <Row><strong class='text-center'><i className='fa-solid fa-shield'></i>&nbsp;&nbsp;  Armor Class:</strong></Row>
                <Row><span class='text-center'>{character.stats.armorClass}</span></Row>
               
                <br></br>

                <Row><strong class='text-center'><i className='fa-solid fa-forward'></i>&nbsp;&nbsp; Initiative:</strong></Row>
                <Row><span class='text-center'>{character.stats.initiative}</span></Row>

                <br></br>

                <Row><strong class='text-center'><i className='fa-solid fa-person-walking'></i>&nbsp;&nbsp; Speed:</strong></Row>
                <Row><span class='text-center'>{character.stats.speed} ft</span></Row>
            
                <br></br>
              </Col>

              <Col sm={4} class='align-items-center'>

                <Row><strong class='text-center'><i className='fa-solid fa-heart'></i>&nbsp;&nbsp; Hit Points:</strong></Row>
                <Row><span class='text-center'>{character.stats.hitPointMax}</span></Row>
               
                <br></br>

                <Row><strong class='text-center'><i className='fa-solid fa-user-graduate'></i>&nbsp;&nbsp; Proficiency Bonus:</strong></Row>
                <Row><span class='text-center'>+ {character.stats.profBonus}</span></Row>
                  
                <br></br>

                <Row><strong class='text-center'>Inspiration:</strong></Row>
                <Row><span class='text-center'>{character.inspiration === true ? <div><i className='fa-solid fa-star'></i></div> : <div><i className='fa-regular fa-star'></i></div>}</span></Row>
              
                <br></br>
              </Col>
              <Col sm={2}></Col>
            </Row>  {/* end misc character stats  */}
          </Col>
        </Row>
      </Card>  {/* End character intro card */}




      </Col>
      <Col>


      

{/* NEW CARD */}
      <Card body>  {/* character stats card */}
     
      <Col>
        <Row> {/* Row 1 - Column Titles */}
          <Col xs={2}></Col>
          <Col xs={9}>
            <strong className='text-nowrap d-none d-xl-inline-block'> STATS&nbsp;&nbsp;-&nbsp;&nbsp;(MODIFIERS)&nbsp;&nbsp;-&nbsp;&nbsp;SAVING THROWS&nbsp;&nbsp;-&nbsp;&nbsp;SKILLS </strong>
          </Col>
        </Row> {/* End Row 1 - Column Titles */}
        <hr/>
{/* ------------------- */}
        

        <Row> {/* Row 2 - Strength */}

          <Col xs={4}> {/* Col 1 - Stat title */}
            <Row>
              <strong className='text-nowrap'><i className='fa-solid fa-weight-hanging'></i>&nbsp;&nbsp; 
              <span className='d-none d-xl-inline-block'>STRENGTH:</span></strong>
            </Row>
          </Col>

          <Col xs={1}> {/* Col 2 - Stats */}
            <Row>
              <span className='text-nowrap float-right'>{character.stats.vitals.strength}</span>
            </Row>
          </Col>

          <Col xs={2}> {/* Col 3 - Modifiers */}
            <Row>
              <span className='text-nowrap float-right'>
              ({character.stats.vitals.strengthModifier < 0 ? 
                <> - {Math.abs(character.stats.vitals.strengthModifier)} </> :
                character.stats.vitals.strengthModifier > 0 ?
                <> + {character.stats.vitals.strengthModifier} </> :
                <> -- </>})
              </span>
            </Row>
          </Col>

          <Col xs={1}> {/* Col 4 - Saving Throws */}
            <Row>
              <span className='text-nowrap float-right'>{character.stats.savingThrows.strengthST}</span>
            </Row>
          </Col>
          
          <Col xs={3}> {/* Col 5 - Skills (strength - athletics) */}
            <Row>
              <span className='text-nowrap'><i className='fa-solid fa-person-hiking'></i>&nbsp;&nbsp; 
              <span className='d-none d-xl-inline-block'>Athletics:</span>
              </span>
            </Row>
          </Col>

          <Col xs={1}>
            <Row>
              <span className='text-nowrap float-right'>{character.stats.skills.athletics}</span>
            </Row>
          </Col>

        </Row> {/* End Row 2 - strength */}

{/* ------------------- */}
  
        <hr/>

        <Row> {/* Row 3 - Dexterity */}

          <Col xs={4}> {/* Col 1 - Stat title */}
            <Row>
              <strong className='text-nowrap'><i className='fa-solid fa-feather-pointed'></i>&nbsp;&nbsp; 
              <span className='d-none d-xl-inline-block'>DEXTERITY:</span></strong>
            </Row>
          </Col>

          <Col xs={1}> {/* Col 2 - Stats */}
            <Row>
              <span className='text-nowrap float-right'>{character.stats.vitals.dexterity}</span>
            </Row>
          </Col>

          <Col xs={2}> {/* Col 3 - Modifiers */}
            <Row>
              <span className='text-nowrap float-right'>
              ({character.stats.vitals.dexModifier < 0 ? 
                <> - {Math.abs(character.stats.vitals.dexModifier)} </> :
                character.stats.vitals.dexModifier > 0 ?
                <> + {character.stats.vitals.dexModifier} </> :
                <> -- </>})
              </span>
            </Row>
          </Col>

          <Col xs={1}> {/* Col 4 - Saving Throws */}
            <Row>
              <span className='text-nowrap float-right'>{character.stats.savingThrows.dexterityST}</span>
            </Row>
          </Col>

          <Col xs={3}> {/* Col 5 - Skills (dex - acrobatics, sleight of hand, stealth) */}
            <Row>
              <Col>
                <Row>
                <span className='text-nowrap'><i className='fa-solid fa-person-running'></i>&nbsp;&nbsp; 
                  <span className='d-none d-xl-inline-block'>Acrobatics:</span>
                  </span>
                </Row>
                <Row>
                <span className='text-nowrap'><i className='fa-solid fa-hand'></i>&nbsp;&nbsp; 
                  <span className='d-none d-xl-inline-block'>Slight of Hand:</span>
                  </span>
                </Row>
                <Row>
                <span className='text-nowrap'><i className='fa-solid fa-eye-slash'></i>&nbsp;&nbsp; 
                  <span className='d-none d-xl-inline-block'>Stealth:</span>
                </span>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col xs={1}>
            <Row>
              <span className='text-nowrap float-right'>{character.stats.skills.acrobatics}</span>
            </Row>
            <Row>
              <span className='text-nowrap float-right'>{character.stats.skills.slightOfHand}</span>
            </Row>
            <Row>
              <span className='text-nowrap float-right'>{character.stats.skills.stealth}</span>
            </Row>
          </Col>

        </Row> {/* End Row 3 - dexterity */}

{/* ------------------- */}
        
        <hr/>

        <Row> {/* Row 4 - Constitution */}

          <Col xs={4}> {/* Col 1 - Stat title */}
            <Row>
              <strong className='text-nowrap'><i className='fa-solid fa-heart-pulse'></i>&nbsp;&nbsp; 
              <span className='d-none d-xl-inline-block'>CONSTITUTION:</span></strong>
            </Row>
          </Col>

          <Col xs={1}> {/* Col 2 - Stats */}
            <Row>
              <span className='text-nowrap float-right'>{character.stats.vitals.constitution}</span>
            </Row>
          </Col>

          <Col xs={2}> {/* Col 3 - Modifiers */}
            <Row>
              <span className='text-nowrap float-right'>
              ({character.stats.vitals.constModifier < 0 ? 
                <> - {Math.abs(character.stats.vitals.constModifier)} </> :
                character.stats.vitals.constModifier > 0 ?
                <> + {character.stats.vitals.constModifier} </> :
                <> -- </>})
              </span>
            </Row>
          </Col>

          <Col xs={1}> {/* Col 4 - Saving Throws */}
            <Row>
              <span className='text-nowrap float-right'>{character.stats.savingThrows.constitutionST}</span>
            </Row>
          </Col>

          <Col xs={4}> {/* Col 5 - Skills (constitution - none) */}
            <Row>
              <></>
            </Row>
          </Col>

        </Row> {/* End Row 4 - const */}

{/* ------------------- */}
        
        <hr/>

        <Row> {/* Row 5 - Intelligence */}

          <Col xs={4}> {/* Col 1 - Stat title */}
            <Row>
              <strong className='text-nowrap'><i className='fa-solid fa-brain'></i>&nbsp;&nbsp; 
              <span className='d-none d-xl-inline-block'>INTELLIGENCE:</span></strong>
            </Row>
          </Col>

          <Col xs={1}> {/* Col 2 - Stats */}
            <Row>
              <span className='text-nowrap float-right'>{character.stats.vitals.intelligence}</span>
            </Row>
          </Col>

          <Col xs={2}> {/* Col 3 - Modifiers */}
            <Row>
              <span className='text-nowrap float-right'>
              ({character.stats.vitals.intelModifier < 0 ? 
                <> - {Math.abs(character.stats.vitals.intelModifier)} </> :
                character.stats.vitals.intelModifier > 0 ?
                <> + {character.stats.vitals.intelModifier} </> :
                <> -- </>})
              </span>
            </Row>
          </Col>

          <Col xs={1}> {/* Col 4 - Saving Throws */}
            <Row>
              <span className='text-nowrap float-right'>{character.stats.savingThrows.intelligenceST}</span>
            </Row>
          </Col>

          <Col xs={3}> {/* Col 5 - Skills (intelligence - arcana, history, investigation, nature, religion) */}
            <Row>
              <Col>
                <Row>
                <span className='text-nowrap'><i className='fa-solid fa-wand-magic-sparkles'></i>&nbsp;&nbsp; 
                  <span className='d-none d-xl-inline-block'>Arcana:</span>
                  </span>
                </Row>
                <Row>
                <span className='text-nowrap'><i className='fa-solid fa-bone'></i>&nbsp;&nbsp; 
                  <span className='d-none d-xl-inline-block'>History:</span>
                  </span>
                </Row>
                <Row>
                <span className='text-nowrap'><i className='fa-solid fa-magnifying-glass'></i>&nbsp;&nbsp; 
                  <span className='d-none d-xl-inline-block'>Investigation:</span>
                  </span>
                </Row>
                <Row>
                <span className='text-nowrap'><i className='fa-solid fa-seedling'></i>&nbsp;&nbsp; 
                  <span className='d-none d-xl-inline-block'>Nature:</span>
                 </span>
                </Row>
                <Row>
                <span className='text-nowrap'><i className='fa-solid fa-hands-praying'></i>&nbsp;&nbsp; 
                  <span className='d-none d-xl-inline-block'>Religion:</span>
                </span>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col xs={1}>
            <Row>
              <span className='text-nowrap float-right'>{character.stats.skills.arcana}</span>
            </Row>
            <Row>
              <span className='text-nowrap float-right'>{character.stats.skills.history}</span>
            </Row>
            <Row>
              <span className='text-nowrap float-right'>{character.stats.skills.investigation}</span>
            </Row>
            <Row>
              <span className='text-nowrap float-right'>{character.stats.skills.perception}</span>
            </Row>
            <Row>
              <span className='text-nowrap float-right'>{character.stats.skills.survival}</span>
            </Row>
          </Col>

        </Row> {/* End Row 5 - intel */}

{/* ------------------- */}
        
        <hr/>

        <Row> {/* Row 6 - Wisdom */}

          <Col xs={4}> {/* Col 1 - Stat title */}
            <Row>
              <strong className='text-nowrap'><i className='fa-solid fa-chess'></i>&nbsp;&nbsp; 
              <span className='d-none d-xl-inline-block'>WISDOM:</span></strong>
            </Row>
          </Col>

          <Col xs={1}> {/* Col 2 - Stats */}
            <Row>
              <span className='text-nowrap float-right'>{character.stats.vitals.wisdom}</span>
            </Row>
          </Col>

          <Col xs={2}> {/* Col 3 - Modifiers */}
            <Row>
              <span className='text-nowrap float-right'>
              ({character.stats.vitals.wisdomModifier < 0 ? 
                <> - {Math.abs(character.stats.vitals.wisdomModifier)} </> :
                character.stats.vitals.wisdomModifier > 0 ?
                <> + {character.stats.vitals.wisdomModifier} </> :
                <> -- </>})
              </span>
            </Row>
          </Col>

          <Col xs={1}> {/* Col 4 - Saving Throws */}
            <Row>
              <span className='text-nowrap float-right'>{character.stats.savingThrows.wisdomST}</span>
            </Row>
          </Col>

          <Col xs={3}> {/* Col 5 - Skills (wisdom - animal handling, insight, medicine, perception, survival) */}
            <Row>
              <Col>
                <Row>
                <span className='text-nowrap'><i className='fa-solid fa-crow'></i>&nbsp;&nbsp; 
                  <span className='d-none d-xl-inline-block'>Animal Handling:</span>
                  </span>
                </Row>
                <Row>
                <span className='text-nowrap'><i className='fa-regular fa-lightbulb'></i>&nbsp;&nbsp; 
                  <span className='d-none d-xl-inline-block'>Insight:</span>
                  </span>
                </Row>
                <Row>
                <span className='text-nowrap'><i className='fa-solid fa-prescription'></i>&nbsp;&nbsp; 
                  <span className='d-none d-xl-inline-block'>Medicine:</span>
                  </span>
                </Row>
                <Row>
                <span className='text-nowrap'><i className='fa-solid fa-binoculars'></i>&nbsp;&nbsp; 
                  <span className='d-none d-xl-inline-block'>Perception:</span>
                  </span>
                </Row>
                <Row>
                <span className='text-nowrap'><i className='fa-solid fa-campground'></i>&nbsp;&nbsp; 
                  <span className='d-none d-xl-inline-block'>Survival:</span>
                  </span>
                </Row>
              </Col>
            </Row>
          </Col>

          <Col xs={1}>
            <Row>
              <span className='text-nowrap'>{character.stats.skills.animalHandling}</span>
            </Row>
            <Row>
              <span className='text-nowrap'>{character.stats.skills.insight}</span>
            </Row>
            <Row>
              <span className='text-nowrap'>{character.stats.skills.medicine}</span>
            </Row>
            <Row>
              <span className='text-nowrap'>{character.stats.skills.perception}</span>
            </Row>
            <Row>
              <span className='text-nowrap'>{character.stats.skills.survival}</span>
            </Row>
          </Col>

        </Row> {/* End Row 6 - wisdom */}

{/* ------------------- */}
        
        <hr/>

        <Row> {/* Row 7 - Charisma */}

          <Col xs={4}> {/* Col 1 - Stat title */}
            <Row>
              <strong className='text-nowrap'><i className='fa-solid fa-users'></i>&nbsp;&nbsp; 
              <span className='d-none d-xl-inline-block'>CHARISMA:</span></strong>
            </Row>
          </Col>

          <Col xs={1}> {/* Col 2 - Stats */}
            <Row>
              <span className='text-nowrap float-right'>{character.stats.vitals.charisma}</span>
            </Row>
          </Col>

          <Col xs={2}> {/* Col 3 - Modifiers */}
            <Row>
              <span className='text-nowrap float-right'>
              ({character.stats.vitals.charismaModifier < 0 ? 
                <> - {Math.abs(character.stats.vitals.charismaModifier)} </> :
                character.stats.vitals.charismaModifier > 0 ?
                <> + {character.stats.vitals.charismaModifier} </> :
                <> + 0 </>})
              </span>
            </Row>
          </Col>

          <Col xs={1}> {/* Col 4 - Saving Throws */}
            <Row>
            <span className='text-nowrap float-right'>{character.stats.savingThrows.charismaST}</span>
            </Row>
          </Col>

          <Col xs={3}> {/* Col 5 - Skills (charisma - deception, intimidation, performance, persuasion) */}
            <Row>
              <Col>
                <Row>
                <span className='text-nowrap'><i className='fa-solid fa-mask'></i>&nbsp;&nbsp; 
                  <span className='d-none d-xl-inline-block'>Deception:</span>
                </span>
                </Row>
                <Row>
                <span className='text-nowrap'><i className='fa-solid fa-gun'></i>&nbsp;&nbsp; 
                  <span className='d-none d-xl-inline-block'>Intimidation:</span>
                  </span>
                </Row>
                <Row>
                <span className='text-nowrap'><i className='fa-solid fa-masks-theater'></i>&nbsp;&nbsp; 
                  <span className='d-none d-xl-inline-block'>Performance:</span>
                  </span>
                </Row>
                <Row>
                <span className='text-nowrap'><i className='fa-solid fa-comments'></i>&nbsp;&nbsp; 
                  <span className='d-none d-xl-inline-block'>Persuasion:</span>
                  </span>
                </Row>
                <br></br>
              </Col>
            </Row>
          </Col>

          <Col xs={1}>
            <Row>
              <span className='text-nowrap float-right'>{character.stats.skills.deception}</span>
            </Row>
            <Row>
              <span className='text-nowrap float-right'>{character.stats.skills.intimidation}</span>
            </Row>
            <Row>
              <span className='text-nowrap float-right'>{character.stats.skills.performance}</span>
            </Row>
            <Row>
              <span className='text-nowrap float-right'>{character.stats.skills.persuasion}</span>
            </Row>
          </Col>

        </Row> {/* End Row 7 - charisma */}
      </Col>
    </Card>




{/* NEW CARD */}
    <Card body>
      <Col>

        <br></br>

        <Row>
          <strong><i className='fa-solid fa-suitcase'></i>&nbsp;&nbsp; 
          <span className='d-none d-lg-inline-block'>EQUIPMENT:</span></strong>
        </Row> 
        <Row><span>{character.stats.equipment.map((p) => " [" + p + "] ")}</span></Row> 

        <br></br>
        <br></br>
                
        <Row>
          <strong><i className='fa-solid fa-graduation-cap'></i>&nbsp;&nbsp; 
          <span className='d-none d-lg-inline-block'>PROFICIENCIES:</span></strong>
        </Row>
        <Row>
          <Col>
            <Row><span>{character.stats.proficiencies.weaponsProf.map((p) => "  [" + p + "]  ")}</span></Row>
            <Row><span>{character.stats.proficiencies.armorProf.map((p) => "  [" + p + "]  ")}</span></Row>
            <Row><span>{character.stats.proficiencies.toolProf.map((p) => "  [" + p + "]  ")}</span></Row>
          </Col>
        </Row>

        <br></br>
        <br></br>

        <Row>
          <strong><i className='fa-solid fa-comment'></i>&nbsp;&nbsp; 
          <span className='d-none d-lg-inline-block'>LANGUAGES:</span></strong>
        </Row>
        <Row><span>{character.stats.proficiencies.languageProf.map((p) => "  [" + p + "]  ")}</span></Row>

        <br></br>
        <br></br>

        <Row>
          <strong><i className='fa-solid fa-dna'></i>&nbsp;&nbsp; 
          <span className='d-none d-lg-inline-block'>FEATURES & TRAITS:</span></strong>
        </Row>
        <Row><span>{character.stats.traits.map((p) => "  [" + p + "]  ")}</span></Row>

        <br></br>
    
      </Col> 
    </Card>
    </Col>  
    </Row>  {/* end card grid */}
    </Card>
    </Container>
  </>
  )
}

export default CharacterScreen