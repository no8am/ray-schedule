import React, { useState, useEffect } from 'react'

import Autocomplete from '@mui/material/Autocomplete';
import { TextField, Chip, Tooltip, IconButton } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import { makeStyles } from '@mui/styles';

import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match'; 
import algoliasearch from 'algoliasearch/lite';

import { useSelector, useDispatch } from "react-redux";
import { selectCourses, setCourses } from '../src/features/userCourses/userCoursesSlice';

const AutocompleteComponent = (props) => {

    const ALGOLIA_APP_ID = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID;
    const ALGOLIA_SEARCH_ONLY_API = process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_ONLY_API;
    const ALGOLIA_INDEX_NAME = process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME;

    const searchClient = algoliasearch(
        ALGOLIA_APP_ID,
        ALGOLIA_SEARCH_ONLY_API,
    );
    const algoliaIndex = searchClient.initIndex(ALGOLIA_INDEX_NAME);

    const dispatch = useDispatch();
    const [query, setQuery] = useState('');
    const [filteredCourseList, setFilteredCourseList] = useState([]);

    const {handleOpenSectionModal, setOpenFilterModal} = props;
    const noFilterIcon = props?.noFilterIcon;

    const courses = useSelector(selectCourses); 
    const setReduxCourses = (props) => {
      let coursesCopy = [...props.courses];
      dispatch(setCourses(coursesCopy));
    }

    useEffect(() => {
      (async () => {
        algoliaIndex
          .search(query)
          .then(({ hits }) => {
            setFilteredCourseList(hits)
          })
      })();
    }, [query]);
        
    return (
    <Autocomplete
      size="small"
      className="w-full"
      width="100%"
      disablePortal={noFilterIcon}
      autoHighlight
      filterSelectedOptions
      multiple
      value={courses}
      {...noFilterIcon ? {open: true} : {}}
      onChange={(e, courses) => setReduxCourses({courses, e})}
      onInputChange={(e, query) => setQuery(query) }
      id="add-course-autocomplete"
      options={filteredCourseList}
      getOptionLabel={option => option.title}
      renderInput={params => (
        <TextField
          {...params}
          className="w-full"
          label="Add course"
          // variant="outlined"
          // InputProps={{
          //   ...params.InputProps,
          //   endAdornment: (
          //     <React.Fragment>
          //       {params.InputProps.endAdornment}
          //       {!noFilterIcon && (
          //         <Tooltip title="Filter" arrow>
          //           <IconButton
          //             onClick={() => setOpenFilterModal(true)}
          //             size="small"
          //           >
          //             <FilterListIcon />
          //           </IconButton>
          //         </Tooltip>
          //       )}
          //     </React.Fragment>
          //     ),
          //   }}
        />
      )}
      // renderOption={(option, { inputValue }) => {
      //     const matches = match(option.title, inputValue);
      //     const parts = parse(option.title, matches);
      //     return (
      //     <div className="parts">
      //         {parts.map((part, index) => (
      //         <span key={index} style={{ fontWeight: part.highlight ? 700 : 400 }}>
      //             {part.text}
      //         </span>
      //         ))}
      //     </div>
      //     );
      // }}
    />
)}

export default AutocompleteComponent;