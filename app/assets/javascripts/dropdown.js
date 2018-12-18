const revealDropdown = (event) => {
  event.stopPropagation(); // prevent event from being picked up by body
	$('#dropdown').removeClass('hidden');
  $('#dropdown-btn').off('click', revealDropdown);
  $(document).on('click', hideDropdown);
};

// add "hidden" class to dropdown and update event listeners
const hideDropdown = () => {
	$('#dropdown').addClass('hidden');
  $('#dropdown-btn').on('click', revealDropdown);
  $(document).off('click', hideDropdown);
};

// Add click listener to gear icon which invokes reveal function
$(() => $('#dropdown-btn').on('click', revealDropdown));
