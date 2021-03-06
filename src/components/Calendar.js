import React from 'react';
import { icons } from '../assets/images';

export default function Calendar() {
    return(
        <table cellSpacing="0" cellPadding="0">
            <thead>
                <tr>
                    <td>
                        <button style={{ backgroundImage: `url(${icons.arrowLeftLight})` }} />
                    </td>
                    <td colSpan="5">December</td>
                    <td>
                        <button style={{ backgroundImage: `url(${icons.arrowRightLight})` }} />
                    </td>
                </tr>
            </thead>
            <tbody>
                <tr className="days">
                    <td>Sun</td>
                    <td>Mon</td>
                    <td>Tue</td>
                    <td>Wed</td>
                    <td>Thu</td>
                    <td>Fri</td>
                    <td>Sat</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                    <td>5</td>
                    <td>6</td>
                    <td>7</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>9</td>
                    <td>10</td>
                    <td>11</td>
                    <td>12</td>
                    <td>13</td>
                    <td>14</td>
                </tr>
                <tr>
                    <td>15</td>
                    <td>16</td>
                    <td>17</td>
                    <td>18</td>
                    <td>19</td>
                    <td>20</td>
                    <td>21</td>
                </tr>
                <tr>
                    <td>22</td>
                    <td>23</td>
                    <td>24</td>
                    <td>25</td>
                    <td>26</td>
                    <td>27</td>
                    <td>28</td>
                </tr>
                <tr>
                    <td>29</td>
                    <td>30</td>
                    <td>31</td>
                    <td/>
                    <td/>
                    <td/>
                    <td/>
                </tr>
            </tbody>
        </table>
    );
}
