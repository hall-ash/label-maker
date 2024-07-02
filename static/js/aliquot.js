const addAliquot = () => {
  const aliquotSection = document.getElementById('aliquot-list');
  const newAliquot = document.createElement('div');
  newAliquot.className = 'aliquot-entry row mb-3';
  newAliquot.innerHTML = `
      <div class="col-md-3">
          <label for="volume" class="form-label">Volume</label>
          <input type="text" class="form-control" name="volume[]">
      </div>
      <div class="col-md-1">
          <label class="form-label">&nbsp;</label>
          <select class="form-select" name="volume_unit[]">
              <option value="mL">mL</option>
              <option value="uL">uL</option>
              <option value="L">L</option>
          </select>
      </div>
      <div class="col-md-3">
          <label for="concentration" class="form-label">Concentration</label>
          <input type="text" class="form-control" name="concentration[]">
      </div>
      <div class="col-md-1">
          <label class="form-label">&nbsp;</label>
          <select class="form-select" name="concentration_unit[]">
              <option value="mg">mg</option>
              <option value="ug">ug</option>
              <option value="g">g</option>
          </select>
      </div>
      <div class="col-md-2">
          <label for="number" class="form-label">Number</label>
          <input type="text" class="form-control" name="number[]">
      </div>
  `;
  aliquotSection.appendChild(newAliquot);
}