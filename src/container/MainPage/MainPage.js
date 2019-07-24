import React, {Component} from 'react';
import {connect} from 'react-redux';
import classes from './MainPage.css';

export class DoorsConstructor extends Component{
  
  render(){
    return(
      <div className={classes.MainPage}>
        <div className={classes.Filters}>
          <div className={classes.Filters__header}>
            <h2>Фильтры</h2>
            <button>Очистить</button>
          </div>
          <hr/>
          <h3>Категории</h3>
          <div className={classes.Filters__select}>
            <select>
              <option value="volvo">Название</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
          </div>
          <div className={classes.Filters__tags}>
            <div>#Логотип</div>
            <div>#Landing-Page</div>
            <div>#Промостайт</div>
            <div>#Логотип</div>
          </div>
          <hr/>
          <h3>Стоимость</h3>
          <div className={classes.Filters__costs}>
            <div className={classes.Filters__select}>
              <select>
                <option value="volvo">USD</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
              </select>
              <input placeholder='От'/>
              <input placeholder='До'/>
            </div>
            <input type="range"/>
          </div>
        </div>
        <div className={classes.Content}>
          <div className={classes.Content__header}>
            <h2>Фильтры</h2>
            <p>(192)</p>
          </div>
          <div className={classes.Content__blocks}>

            <div className={classes.Content__block}>
              <div className={classes.Content__block__left}>
                <article>
                  <h3>Дизайе Сайта UI & UX</h3>
                  <p>Lorem Ipsum is simply dummy text of
                    the printing and typesetting industry.
                      Lorem Ipsum has been the industry's
                      standard dummy 
                    text ever since the 1500s, when an unknown
                    printer took a galle
                  </p>
                  <div className={classes.Content__block__tags}>
                    <div>#Логотип</div>
                    <div>#Landing-Page</div>
                    <div>#Промостайт</div>
                    <div>#Логотип</div>
                  </div>
                </article>
              </div>
              <div className={classes.Content__block__Right}>
                  <div>1 800$</div>
                  <div>1-2 мксяца</div>
              </div>
            </div>

            <div className={classes.Content__block}>
              <div className={classes.Content__block__left}>
                <article>
                  <h3>Дизайе Сайта UI & UX</h3>
                  <p>Lorem Ipsum is simply dummy text of
                    the printing and typesetting industry.
                      Lorem Ipsum has been the industry's
                      standard dummy 
                    text ever since the 1500s, when an unknown
                    printer took a galle
                  </p>
                  <div className={classes.Content__block__tags}>
                    <div>#Логотип</div>
                    <div>#Landing-Page</div>
                    <div>#Промостайт</div>
                    <div>#Логотип</div>
                  </div>
                </article>
              </div>
              <div className={classes.Content__block__Right}>
                  <div>1 800$</div>
                  <div>1-2 мксяца</div>
              </div>
            </div>

            <div className={classes.Content__block}>
              <div className={classes.Content__block__left}>
                <article>
                  <h3>Дизайе Сайта UI & UX</h3>
                  <p>Lorem Ipsum is simply dummy text of
                    the printing and typesetting industry.
                      Lorem Ipsum has been the industry's
                      standard dummy 
                    text ever since the 1500s, when an unknown
                    printer took a galle
                  </p>
                  <div className={classes.Content__block__tags}>
                    <div>#Логотип</div>
                    <div>#Landing-Page</div>
                    <div>#Промостайт</div>
                    <div>#Логотип</div>
                  </div>
                </article>
              </div>
              <div className={classes.Content__block__Right}>
                  <div>1 800$</div>
                  <div>1-2 мксяца</div>
              </div>
            </div>

            <div className={classes.Content__block}>
              <div className={classes.Content__block__left}>
                <article>
                  <h3>Дизайе Сайта UI & UX</h3>
                  <p>Lorem Ipsum is simply dummy text of
                    the printing and typesetting industry.
                      Lorem Ipsum has been the industry's
                      standard dummy 
                    text ever since the 1500s, when an unknown
                    printer took a galle
                  </p>
                  <div className={classes.Content__block__tags}>
                    <div>#Логотип</div>
                    <div>#Landing-Page</div>
                    <div>#Промостайт</div>
                    <div>#Логотип</div>
                  </div>
                </article>
              </div>
              <div className={classes.Content__block__Right}>
                  <div>1 800$</div>
                  <div>1-2 мксяца</div>
              </div>
            </div>

            <div className={classes.Content__block}>
              <div className={classes.Content__block__left}>
                <article>
                  <h3>Дизайе Сайта UI & UX</h3>
                  <p>Lorem Ipsum is simply dummy text of
                    the printing and typesetting industry.
                      Lorem Ipsum has been the industry's
                      standard dummy 
                    text ever since the 1500s, when an unknown
                    printer took a galle
                  </p>
                  <div className={classes.Content__block__tags}>
                    <div>#Логотип</div>
                    <div>#Landing-Page</div>
                    <div>#Промостайт</div>
                    <div>#Логотип</div>
                  </div>
                </article>
              </div>
              <div className={classes.Content__block__Right}>
                  <div>1 800$</div>
                  <div>1-2 мксяца</div>
              </div>
            </div>

            <div className={classes.Content__block}>
              <div className={classes.Content__block__left}>
                <article>
                  <h3>Дизайе Сайта UI & UX</h3>
                  <p>Lorem Ipsum is simply dummy text of
                    the printing and typesetting industry.
                      Lorem Ipsum has been the industry's
                      standard dummy 
                    text ever since the 1500s, when an unknown
                    printer took a galle
                  </p>
                  <div className={classes.Content__block__tags}>
                    <div>#Логотип</div>
                    <div>#Landing-Page</div>
                    <div>#Промостайт</div>
                    <div>#Логотип</div>
                  </div>
                </article>
              </div>
              <div className={classes.Content__block__Right}>
                  <div>1 800$</div>
                  <div>1-2 мксяца</div>
              </div>
            </div>

            <div className={classes.Content__block}>
              <div className={classes.Content__block__left}>
                <article>
                  <h3>Дизайе Сайта UI & UX</h3>
                  <p>Lorem Ipsum is simply dummy text of
                    the printing and typesetting industry.
                      Lorem Ipsum has been the industry's
                      standard dummy 
                    text ever since the 1500s, when an unknown
                    printer took a galle
                  </p>
                  <div className={classes.Content__block__tags}>
                    <div>#Логотип</div>
                    <div>#Landing-Page</div>
                    <div>#Промостайт</div>
                    <div>#Логотип</div>
                  </div>
                </article>
              </div>
              <div className={classes.Content__block__Right}>
                  <div>1 800$</div>
                  <div>1-2 мксяца</div>
              </div>
            </div>

            <div className={classes.Content__block}>
              <div className={classes.Content__block__left}>
                <article>
                  <h3>Дизайе Сайта UI & UX</h3>
                  <p>Lorem Ipsum is simply dummy text of
                    the printing and typesetting industry.
                      Lorem Ipsum has been the industry's
                      standard dummy 
                    text ever since the 1500s, when an unknown
                    printer took a galle
                  </p>
                  <div className={classes.Content__block__tags}>
                    <div>#Логотип</div>
                    <div>#Landing-Page</div>
                    <div>#Промостайт</div>
                    <div>#Логотип</div>
                  </div>
                </article>
              </div>
              <div className={classes.Content__block__Right}>
                  <div>1 800$</div>
                  <div>1-2 мксяца</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state =>{
  return {
   
  };
};

export default connect(mapStateToProps)(DoorsConstructor);