<template>
    <div>
        <br><br>
        <p>{{ turret }}</p>
        <br>
        <select :value="selectedLaser" @input="$emit('update:selectedLaser', $event.target.value)">
            <option value="" disabled>Select Laser</option>
            <option v-for="laser in lasers" :key="laser.name" :value="laser">
            {{ laser.name }}
            </option>
        </select>
        <br><br>
        <div v-if="selectedLaser">
            <div v-for="n in selectedLaser.consumables" style="padding-block-start:5px">
                <select :value="selectedModules[n-1]" @input="$emit('update:selectedModules', selectedModules.map((x, i) => i === n-1 ? $event.target.value : x))">
                    <option disabled value="">Select Module</option>
                    <option v-for="module in laserModules" :key="module.name" :value="module">
                    {{ module.name }}
                    </option>
                </select>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['turret', 'lasers', 'laserModules', 'selectedLaser', 'selectedModules']
}
</script>

