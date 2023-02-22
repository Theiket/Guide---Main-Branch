<template>
<div class="container">
<!-- Ship Selection Card -->
  <div class="leftcard">
    <div class="col-md-3">
      <h4>
      Manufacturer
      </h4>
      <br>
    <center>
    <select v-model="selectedCompany">
      <option disabled value="">Choose a manufacturer</option>
      <option v-for="company in companies" :key="company">{{ company }}</option>
    </select>
    <br><br><br>
  <div class="aegis" v-if="selectedCompany === 'Aegis Dynamics'">
    <span v-for="ships in aegis">
      <td>
      <button :key="ships.name" @click="updateInfo(ships)"></button>
      <p> {{ ships.name }} </p>
      </td>
    </span>
  </div>
  <div class="anvil" v-if="selectedCompany === 'Anvil Aerospace'">
    <span v-for="ships in anvil">
      <td>
      <button :key="ships" @click="vehicleName = ships"></button>
      <p> {{ ships }} </p>
      </td>
    </span>
  </div>
  <div class="aopoa" v-if="selectedCompany === 'AopoA'">
    <span v-for="ships in aopoa">
      <td>
      <button :key="ships" @click="vehicleName = ships"></button>
      <p> {{ ships }} </p>
      </td>
    </span>
  </div>
  <div class="argo" v-if="selectedCompany === 'ARGO Astronautics'">
    <span v-for="ships in argo">
      <td>
      <button :key="ships" @click="vehicleName = ships"></button>
      <p> {{ ships }} </p>
      </td>
    </span>
  </div>
  <div class="banu" v-if="selectedCompany === 'Banu Souli'">
    <span v-for="ships in banu">
      <td>
      <button :key="ships" @click="vehicleName = ships"></button>
      <p> {{ ships }} </p>
      </td>
    </span>
  </div>
  <div class="consol" v-if="selectedCompany === 'Consolidated Outland'">
    <span v-for="ships in consol">
      <td>
      <button :key="ships" @click="vehicleName = ships"></button>
      <p> {{ ships }} </p>
      </td>
    </span>
  </div>
  <div class="crusader" v-if="selectedCompany === 'Crusader Industries'">
    <span v-for="ships in crusader">
      <td>
      <button :key="ships" @click="vehicleName = ships"></button>
      <p> {{ ships }} </p>
      </td>
    </span>
  </div>
  <div class="drake" v-if="selectedCompany === 'Drake Interplanetary'">
    <span v-for="ships in drake">
      <td>
      <button></button>
      <p> {{ ships }} </p>
      </td>
    </span>
  </div>
  <div class="esperia" v-if="selectedCompany === 'Esperia Inc.'">
    <span v-for="ships in esperia">
      <td>
      <button :key="ships" @click="vehicleName = ships"></button>
      <p> {{ ships }} </p>
      </td>
    </span>
  </div>
  <div class="gatac" v-if="selectedCompany === 'Gatac Manufacture'">
    <span v-for="ships in gatac">
      <td>
      <button :key="ships" @click="vehicleName = ships"></button>
      <p> {{ ships }} </p>
      </td>
    </span>
  </div>
  <div class="greycat" v-if="selectedCompany === 'Greycat Industrial'">
    <span v-for="ships in greycat">
      <td>
      <button :key="ships" @click="vehicleName = ships"></button>
      <p> {{ ships }} </p>
      </td>
    </span>
  </div>
  <div class="kruger" v-if="selectedCompany === 'Kruger Intergalactic'">
    <span v-for="ships in kruger">
      <td>
      <button :key="ships" @click="vehicleName = ships"></button>
      <p> {{ ships }} </p>
      </td>
    </span>
  </div>
  <div class="misc" v-if="selectedCompany === 'Musashi Industrial (MISC)'">
    <span v-for="ships in misc">
      <td>
      <button :key="ships" @click="vehicleName = ships"></button>
      <p> {{ ships }} </p>
      </td>
    </span>
  </div>
  <div class="origin" v-if="selectedCompany === 'Origin Jumpworks'">
    <span v-for="ships in origin">
      <td>
      <button :key="ships" @click="vehicleName = ships"></button>
      <p> {{ ships }} </p>
      </td>
    </span>
  </div>
  <div class="rsi" v-if="selectedCompany === 'Roberts Space Industries'">
    <span v-for="ships in rsi">
      <td>
      <button :key="ships" @click="vehicleName = ships"></button>
      <p> {{ ships }} </p>
      </td>
    </span>
  </div>
  <div class="tumbril" v-if="selectedCompany === 'Tumbril Land Systems'">
    <span v-for="ships in tumbril">
      <td>
      <button :key="ships" @click="vehicleName = ships"></button>
      <p> {{ ships }} </p>
      </td>
    </span>
  </div>
    </center>
    </div>
  </div>
<!-- Component Selection Card -->
  <div class="centercard">
    <div class="weapons">
      <p>Weapons</p>
      <br>
      <div class="dropdown">
      <va-button-group preset="plain" class="mb-6">
      <va-button @click="weapons = !weapons">
      <Icon name="bxs:caret-down-circle" />
      </va-button>
      </va-button-group>
      </div>
      <div v-if="weapons">
      <br>
      <p>Become Visible</p>
      </div>
    </div>
    <div class="shields">
      <br>
      <p>Shields</p>
      <br>
      <div class="dropdown">
      <va-button-group preset="plain" class="mb-6">
      <va-button @click="shields = !shields">
      <Icon name="bxs:caret-down-circle" />
      </va-button>
      </va-button-group>
      </div>
      <div class="componentSelect" v-if="shields">
        <span class="coolerButton" v-for="shield in s1shields">
          <button>
          <h4> {{shield}} </h4>
          <p>
          Grade | Class <br>
          Capacity: numVal
          </p>
          </button>
        </span>
        <br>
      </div>
    </div>
    <div class="powerplants">
      <br>
      <p>Power Plants</p>
      <br>
      <div class="dropdown">
      <va-button-group preset="plain" class="mb-6">
      <va-button @click="powerplants = !powerplants">
      <Icon name="bxs:caret-down-circle" />
      </va-button>
      </va-button-group>
      </div>
      <div class="componentSelect" v-if="powerplants">
        <span class="coolerButton" v-for="powerplant in s1powerplants">
          <button>
          <h4> {{powerplant}} </h4>
          <p>
          Grade | Class <br>
          Power: numVal
          </p>
          </button>
        </span>
        <br>
      </div>
    </div>
    <div class="coolers">
      <br>
      <p>Coolers</p>
      <br>
      <div class="dropdown">
        <va-button-group preset="plain" class="mb-6">
        <va-button @click="coolers = !coolers">
        <Icon name="bxs:caret-down-circle" />
        </va-button>
        </va-button-group>
      </div>
      <div class="componentSelect" v-if="coolers">
        <span class="coolerButton" v-for="cooler in s1coolers">
          <button>
          <h4> {{cooler}} </h4>
          <p>
          Grade | Class <br>
          Cooling: numVal
          </p>
          </button>
        </span>
        <br>
      </div>
    </div>
    <div class="quantumdrives">
      <br>
      <p>Quantum Drives</p>
      <br>
      <div class="dropdown">
      <va-button-group preset="plain" class="mb-6">
      <va-button @click="quantumdrives = !quantumdrives">
      <Icon name="bxs:caret-down-circle" />
      </va-button>
      </va-button-group>
      </div>
      <div class="componentSelect" v-if="quantumdrives">
      <span class="coolerButton" v-for="quantumdrive in s1quantumdrives">
          <button>
          <h4> {{quantumdrive}} </h4>
          <p>
          Grade | Class <br>
          Values Go Here
          </p>
          </button>
        </span>
        <br>
      </div>
    </div>
  </div>
<!-- Ship Information Card -->
  <div class="rightcard">
    <div class="col-md-3">
      <h4>
      {{vehicleName}}
      </h4>
      <div class="vehicleText">
        <p>
        {{vehicleDescription}}
        </p>
      </div>
      <va-divider />
      <table class="infoCard">
        <tr>
          <td class="shipRole">
            <h4>Role</h4>
            <br>
            <p>{{vehicleRole}}</p>
          </td>
          <td class="shipSize">
            <h4>Size</h4>
            <br>
            <p>Value</p>
          </td>
        </tr>
        <tr>
          <td class="shipDimensions">
            <h4>Dimensions</h4>
            <br>
            <p>Length x<br>Width x<br>Height x</p>
          </td>
          <td class="shipFuel">
            <h4>Fuel Capacity</h4>
            <br>
            <p>Quantum Value<br>Hydrogen Value</p>
          </td>
        </tr>
        <tr>
          <td class="shipShields">
            <h4>Shield Capacity</h4>
            <br>
            <p>Shield Value</p>
          </td>
          <td class="shipHealth">
            <h4>Hull Health</h4>
            <br>
            <p>Hitpoint Value</p>
          </td>
        </tr>
        <tr>
          <td class="shipPower">
            <h4>Power</h4>
            <br>
            <p>Power Value</p>
          </td>
          <td class="shipCooling">
            <h4>Cooling Capacity</h4>
            <br>
            <p>Cooling Value</p>
          </td>
        </tr>
        <tr>
          <td class="shipEM">
            <h4>EM Emissions</h4>
            <br>
            <p>EM Value</p>
          </td>
          <td class="shipIR">
            <h4>IR Emissions</h4>
            <br>
            <p>IR Value</p>
          </td>
        </tr>
    </table>
    </div>
  </div>
</div>
</template>

<script setup>
  useHead({
    title: 'GUIDE | Vehicle Loadouts'
  })

</script>

<script>
export default {
  data() {
    return {
      weapons: false,
      shields: false,
      powerplants: false,
      coolers: false,
      quantumdrives: false,
      selectedCompany: '',
      vehicleName:'Please select a vehicle',
      vehicleDescription:'Please select a vehicle to see their description.',
      vehicleRole:'',
      companies: [
        'Aegis Dynamics', 'Anvil Aerospace', 'AopoA', 'ARGO Astronautics', 'Banu Souli', 'Consolidated Outland', 'Crusader Industries', 'Drake Interplanetary', 'Esperia Inc.', 'Gatac Manufacture', 'Greycat Industrial','Kruger Intergalactic', 'Musashi Industrial (MISC)', 'Origin Jumpworks', 'Roberts Space Industries', 'Tumbril Land Systems'
        ],
      aegis: [
        {
          name:'Avenger Stalker',
          description:"Initially designed as a frontline carrier for the military, the Avenger Stalker took a different path, ultimately having a long and storied career as the standard patrol craft of the UEE Advocacy. Utilizing its cargo hold for prisoner transport, the Avenger features a sturdy, reliable hull and the capacity for larger-than-expected engine mounts.",
          role:'Interdiction',
        },
        {
          name:'Avenger Titan',
          description:"With extra room in the back, the Titan’s hold is free to carry cargo. Couple that with the Avenger’s tried and true combat abilities and you’ve got a light cargo hauler that’s more than capable of handling itself in a fight.",
          role:'Light freight',
        },
        {
          name:'Avenger Warlock',
          description:"Outfitted with a Behring REP-8 EMP Generator, the Warlock makes non-lethal suppression possible via a powerful electromagnetic wave capable of disabling any electronics within the blast radius.",
          role:'Interdiction',
        },
        {
          name:'Eclipse',
          description:"The Aegis Eclipse is a bomber designed to get in and strike before its even spotted. After extensive service with the UEE, this high-tech military stalwart is making its debut on the civilian market for 2947.",
          role:'Stealth bomber',
        },
        {
          name:'Gladius',
          description:"The Gladius is an older design which has been updated over the years to keep up with modern technology. In military circles, the Gladius is beloved for its performance and its simplicity. A fast, light fighter with a laser-focus on dogfighting, the Gladius is an ideal interceptor or escort ship.",
          role:'Light fighter',
        },
        {
          name:'Hammerhead',
          description:"A fast patrol ship with multiple turrets designed to combat fighters, the Hammerhead is equally suited to support larger capital ships in a fleet or act as a flagship for fighter groups.",
          role:'Heavy gunship',
        },
        {
          name:'Idris-K',
          description:"The Aegis Idris-K is an aftermarket special edition of the Idris-P that features additional equipments tailored to dealing with the swarm threat of carrier-type ships. Compared to the Idris-P, Idris-K has an additional size 10 laser beam, four point defense turrets that replaced the remote turrets, and a missile turret that replaced a manned turret. Both Idris-P and Idris-M can be converted to this variant using the aftermarket kit.",
          role:'Frigate',
        },
        {
          name:'Idris-M',
          description:"Larger than a bomber but smaller than a ship of the line, frigates occupy an interesting space in the pantheon of warships. While they lack the heavy armor and the capital weaponry of a cruiser, frigates are more maneuverable and are highly configurable.",
          role:'Frigate',
        },
        {
          name:'Idris-P',
          description:"A mark two 'peacekeeper' variant developed for the UEE patrol services, the Idris-P strips the standard ships ship-to-ship gun and spinal mount in favor of additional cargo capacity and superior speed.",
          role:'Frigate',
        },
        {
          name:'Javelin',
          description:'Designed for use by the UEE military, the Javelin is a massive, modular capital ship that can be appropriated for entrepreneurial use. With a detailed interior, plenty of modular room options and a high crew capacity, the Javelin is a ship that has made a name for itself in a variety of roles.',
          role:'Destroyer',
        },
        {
          name:'Nautilus',
          description:'With four centuries of distinguished service under its belt, The Aegis Dynamics Nautilus tactical minelayer represents the ultimate in strategic combat engineering, with fully-integrated mine-deployment, sweeping and disarming capabilities.',
          role:'Minelayer',
        },
        {
          name:'Reclaimer',
          description:'The Aegis Reclaimer is an industrial salvage ship. Equipped with a reinforced cargo bay, a long-range jump drive and launch pods for unmanned drones, the Reclaimer is an ideal ship for taking advantage of deep space wrecks. Tractor beams, floodlights, scanner options and docking ports round out the tools on this capable, utilitarian spacecraft.',
          role:'Heavy salvage',
        },
        {
          name:'Redeemer',
          description:'Designed by Star Citizens backers, the Aegis Redeemer is a powerful fighting ship capable of holding its own in combat with a powerful weapons payload. Dotted with turrets and missiles, the Redeemer also doubles as an armored landing craft capable of delivering armored soldiers for first person combat!',
          role:'Gunship',
        },
        {
          name:'Retaliator Base',
          description:'The Aegis Dynamics’ Retaliator has landed! One of the United Empire of Earth’s most powerful warbirds, the Retaliator was designed as a fearsome weapons platform designed to strike and kill capital ships. A key portion of the UEE’s power projection, Retaliator squadrons have served with distinction against outlaws, the Vanduul and elsewhere. The base version of the Retaliator is customizable with additional modules to fit your needs.',
          role:'Heavy gunship',
        },
        {
          name:'Retaliator Bomber',
          description:'The Aegis Dynamics’ Retaliator has landed! One of the United Empire of Earth’s most powerful warbirds, the Retaliator was designed as a fearsome weapons platform designed to strike and kill capital ships. A key portion of the UEE’s power projection, Retaliator squadrons have served with distinction against outlaws, the Vanduul and elsewhere. This version of the Retaliator includes the bomb bay and torpedo launcher.',
          role:'Heavy bomber',
        },
        {
          name:'Sabre',
          description:'Part of Aegis Dynamics’ Phase Two of new ship models, the Sabre was designed as a space superiority fighter for those situations where you need to leave a lighter footprint. Designed to be a rapid responder, the Sabre is more than capable of establishing battlefield dominance for any number of combat scenarios.',
          role:'Stealth fighter',
        },
        {
          name:'Sabre Comet',
          description:'Created as part of the ‘Masters of Flight’ series in conjunction with the flight-sim Arena Commander, the Comet pays tribute to famed pilot Captain Kamur Dalion for his work with Aegis to usher in a new era of combat ship design. This Sabre comes equipped with a specialized dogfighting focused loadout and a custom special edition livery honoring this iconic ship.',
          role:'Medium fighter',
        },
        {
          name:'Sabre Raven',
          description:'Part of Aegis Dynamics’ Phase Two of new ship models, the Sabre was designed as a space superiority fighter for those situations where you need to leave a lighter footprint. They have raised the bar yet again with their Raven variant, maintaining all the speed and maneuverability of its Sabre forebear, but with a lower ship signature, making it a fast, stealthy infiltrator.',
          role:'Interdiction',
        },
        {
          name:'Vanguard Harbinger',
          description:'The Vanguard Harbinger is Earth’s standard fighter-bomber, converting the standard Warden model’s escape pod into a potent bomb bay. The extended range of the Vanguard and the relatively small profile mean that it can go where carrier-based planes or larger strategic bombers don’t… and then strike hard and make it back to frontier bases. The Vanguard Harbinger is a powerful bomber that can operate out of the roughest forward operating bases.',
          role:'Bomber',
        },
        {
          name:'Vanguard Hoplite',
          description:'The Vanguard Hoplite is a cross between the winning Vanguard deep space fighter and a dedicated boarding ship. Adapted from proven assault ship designs, the Hoplite is the perfect tool for inserting an armored strike team with enough firepower to get them out again.',
          role:'Dropship',
        },
        {
          name:'Vanguard Sentinel',
          description:'The Vanguard Sentinel is a ship that’s designed to fight smart instead of taking enemies head on. The conversion features an AR cockpit, an external e-War pod, decoy missiles and a set of EMP charges. Vanguard Sentinels often provide necessary combat support for combined operations. A lone Sentinel assigned wild weasel tasks is frequently paired with Harbinger bombers and Warden escorts for large attack missions.',
          role:'Interdiction',
        },
        {
          name:'Vanguard Warden',
          description:'The A3G Vanguard Warden is one of Aegis Dynamics most versatile and deadly long-range fighters. With an extra heavy frame, and an extra nasty loadout, the Warden is an absolute beast on the frontlines of any assault operation.',
          role:'Heavy fighter',
        },
        {
          name:'Vulcan',
          description:'Refuel. Repair. Rearm. Become a one-person support crew with Aegis Dynamics’ versatile Vulcan, supplying aid to pilots on the fly. Whether pinned down under heavy fire and in need of ammunition, low on quantum fuel after an ill-planned jump, or stranded in unknown space with a busted thruster, a pilot in distress can always count on a Vulcan and its cadre of drones to lend speedy, efficient assistance. Outfit your Vulcan with eye-catching livery and become a beacon of hope, even in the darkest, most treacherous corners of the ‘verse.',
          role:'Medium repair/refuel',
        }
        ],
      anvil: [
        {
          name:'Arrow',
          description:"Meet Anvils ‘light fighter of the future’. Featuring an ultra-aerodynamic frame, slight profile, and the most advanced manoeuvring thruster tech available, it’s the most agile ship in its class. It can also hold its own in a knock-down-drag-out thanks to a generous standard weapons package that includes quad missile racks and a full complement of countermeasures. The Arrow is designed specifically to leave would-be interlopers thoroughly bewildered. After all, how can they kill what they can't catch?",
          role:'Light fighter',
        },
        {
          name:'Ballista',
          description:"",
          role:'Military',
        },
        {
          name:'C8 Pisces',
          description:"Additional firepower turns the base Pisces into a highly capable mini-explorer. Ideal for inter-system travel or investigating tight spots inaccessible to larger ships, it’s a small ship ready for big adventures.",
          role:'Exploration',
        },
        {
          name:'C8R Pisces Rescue',
          description:"With the addition of an onboard Tier 3 Medical Bed, the C8R Pisces can treat minor injuries and keep a patient stable while transporting them to the safety of a larger ship, station, or nearby medical facility, making it an invaluable asset for short-range search and rescue.",
          role:'Medical',
        },
        {
          name:'C8X Pisces Expedition',
          description:"Additional firepower turns the base Pisces into a highly capable mini-explorer. Ideal for inter-system travel or investigating tight spots inaccessible to larger ships, it’s a small ship ready for big adventures.",
          role:'Exploration',
        },
        {
          name:'Carrack',
          description:"The Anvil Carrack features reinforced fuel tanks for long-duration flight, an advanced jump drive, and a dedicated computer core for jump charting operations. Originally a military exclusive, the Carrack is now available for civilian use. On-board accommodations include crew medical and repair facilities, and a mapping-oriented sensor suite.",
          role:'Expedition',
        },
        {
          name:'Centurion',
          description:"Built on Anvil’s popular Atlas Platform, the Centurion presents a tactical solution for short-range anti-aircraft operations. Dominate any combat zone by assuring immediate threats from above are dealt with quickly and efficiently, thanks to the Centurion’s custom energy-based AA turret.",
          role:'Combat',
        },
        {
          name:'Crucible',
          description:"A so-called “flying toolbox,” the Crucible is Anvil Aerospace’s first dedicated repair ship. Featuring a rotating control bridge and a detachable pressurized workspace, the Crucible is a versatile mobile garage equipped with repair arms, a drone operation center and all the equipment needed to overhaul a damaged craft back into fighting shape.",
          role:'Heavy repair',
        },
        {
          name:'F7A Hornet',
          description:"The UEE Navys premier carrier-based fighter craft, the F7A is the front-line attack ship for military combat missions. While not outfitted for long range runs, the Hornet can take her share of hits... and dish out a consistent, powerful response.",
          role:'Medium fighter',
        },
        {
          name:'F7A Hornet MK II',
          description:"The Anvil F7A Hornet Mk II is the cutting-edge carrier-based fighter revamped from the older F7A Hornet model, the UEE military version of the Hornet.",
          role:'Medium fighter',
        },
        {
          name:'F7C Hornet',
          description:"To the enemy, it is a weapon never to be underestimated. To allies, it's a savior. The F7C Hornet is the same dependable and resilient multi-purpose fighter that has become the face of the UEE Navy. The F7C is the foundation to build on and meet whatever requirements you have in mind.",
          role:'Medium fighter',
        },
        {
          name:'F7C-M Super Hornet',
          description:"The closest to the Military load-out as is legally possible for a Civilian model, the F7C-M Super Hornet reattaches the ball turret and offers near milspec parts under the hood. Proving that two heads are better than one, a second seat has been added to split the logistic and combat duty, making the Super Hornet a truly terrifying mark to engage.",
          role:'Medium fighter',
        },
        {
          name:'F7C-R Hornet Tracker',
          description:"If the Ghost is made to hide, the Tracker is made to seek. The F7C-R Tracker boasts an advanced radar suite making it ideal for deep-space explorers who require depth and accuracy in their scan packages. Local militia and larger merc units will also repurpose Trackers to act as mobile C&C ships for their squadrons.",
          role:'Pathfinder',
        },
        {
          name:'F7C-S Hornet Ghost',
          description:"Through a combination of low-emission drives, low-draw weapons, and Void Armor technology capable of diffusing scans, the F7C-S Ghost is built for the pilot who wants to keep a low profile. The Ghost is capable of slipping past the most ardent of observers to accomplish whatever goal you need to accomplish. Don't worry, we won't ask.",
          role:'Stealth fighter',
        },
        {
          name:'Gladiator',
          description:"The civilian model of the Gladiator appeals to those that want explore the ‘Verse with a bit of added security. Supporting a maximum of two, the Gladiator is perfectly equipped to explore and fight with or without a wingman. The Civilian model allows pilots to choose between an extra cargo hold or a bomb bay.",
          role:'Bomber',
        },
        {
          name:'Hawk',
          description:"A small, light fighter with an emphasis on weaponry, the Hawk boasts an impressive arsenal of lethal and non-lethal weapons, making it a perfect ship for independent bounty hunters or local security looking for a little more punch.",
          role:'Light fighter',
        },
        {
          name:'Hurricane',
          description:"Big things do come in small packages: the Hurricane is a fighting spacecraft that packs a deadly punch into a slight fuselage. The spacecraft compensates for its lack of creature comforts with its powerful armament - six guns capable of blasting their way through nearly anything. Hurricane pilots have yet to find an enemy shield they can't knock down.",
          role:'Heavy fighter',
        },
        {
          name:'Legionnaire',
          description:"The Anvil Legionnaire presents the civilian market with a military style boarding vessel capable of occupying ships of varying sizes, crews, and capacities. High-performance jump seats safely transport a boarding party of up to ten into the action, while integrated systems let your copilot bypass security protocols on the target vessel, mitigating risk like never before.",
          role:'Boarding',
        },
        {
          name:'Liberator',
          description:"Anvil continues its tradition of excellence with the Liberator, an open-air vehicle carrier that applies the tradition of long-range transport to a smaller scale. Designed with the same quantum drive and long-distance capabilities of military-spec carriers and pathfinders but tailored to the civilian market, the Liberator puts your fleet on the front lines of any operation.",
          role:'Light carrier',
        },
        {
          name:'Spartan',
          description:"",
          role:'Transport',
        },
        {
          name:'Terrapin',
          description:"Outfitted with long-range scanners and encased in heavy armor and oversized shields, the U4A-3 Terrapin can face potentially hazardous circumstances with confidence, making it the ultimate combat scout and reconnaissance vehicle, at least according to Anvil.",
          role:'Pathfinder',
        },
        {
          name:'Valkyrie',
          description:"In the days of antiquity, the Valkyrie were believed to choose who would live and who would die on the field of war. Now, Anvil is putting that choice in your hands. Seize fate and turn the tide of battle. Rugged, high-performance jump seats safely transport up to twenty personnel into and out of the fray. A vehicle bay and speed ramp efficiently launch ground-based transport or reconnaissance vehicles for unmatched support. Four powerful VTOL thrusters facilitate surgically precise take-offs and landings, while a devastating array of weaponry blurs the line between dropship and gunship.",
          role:'Dropship',
        },
        ],
      aopoa: [
        {
          name:'Khartu-al',
          description:"The Xi'an Aopoa corporation manufactures an export model of the Qhire Khartu, the Khartu-al, for sale to Human civilians. The export model features the same Xi'an maneuvering rig, but control surfaces modified for Human use and a more limited armament.",
          role:'Light fighter',
        },
        {
          name:'Nox',
          description:"Hit the skids with the 2947 Nox. This speedy and maneuverable open-canopy racer from Aopoa is capable of zipping along planet surfaces or deep space. Available for the first time in Human space, the Nox has been specifically redesigned for Human pilots, so grab your ship and head to the racetrack today.",
          role:'Racing',
        },
        {
          name:"San'Tok.Yai",
          description:"Harnessing the power of next-generation Xi'an flight systems, upgraded dual-vector thrusters, and a daunting weapons package, Aopoa has crafted a fighter that retains the nimble dexterity and tight handling the brand is known for. All with the added ability to pack a serious wallop when the situation calls for it. Welcome to the future of spaceflight, courtesy of the Xi'an Empire and Aopoa.",
          role:'Medium fighter',
        },
        ],
      argo: [
        {
          name:'MOLE',
          description:"ARGO’s pragmatic no-nonsense approach to ship design is celebrated in the unmistakable silhouette of the MOLE. Just one look at this machine and you know it means business. Tap into your full potential with the combined force of ARGO’s patented trilateral mining system. The MOLE has a total of 24 mineral pods, each holding 12 SCU. Eight pods are usable at one time – when they’re full, either head home or jettison them for collection by another vessel and carry on mining. Three independently controlled articulated extraction stations allow for maximum power and near-limitless versatility. The MOLE lives by the adage ’many hands make for light work’.",
          role:'Prospecting & Mining',
        },
        {
          name:'MPUV Cargo',
          description:"The ARGO Astronautics MPUV-1C (commonly ‘Argo Cargo’) is a dedicated merchant transfer ship, a ubiquitous intergalactic stevedore. Vast numbers of Argo Cargos are responsible for loading and unloading goods onto massive long-haul transports and miners that cannot otherwise land on planets or drydocks, such as the Hull D and the Orion. Some captains choose to own and operate their own Argo, while others pay privately owned ships operating as port services a rental fee for performing the unloading process. Boaty McBoatface.",
          role:'Light freight',
        },
        {
          name:'MPUV Personnel',
          description:"The ARGO Astronautics MPUV-1P (commonly ‘Argo Personnel.’) is geared towards a simple but incredibly important responsibility: moving groups of people from place to place. The UEE Navy uses MPUV-1Ps extensively, and any new recruit can likely recall those terrifying moments in which such a ship carried them to their first space assignment. In civilian hands, Argo Personnel ships are adapted for everything from standard taxi services to use as makeshift combat dropships. The ARGO is capable of carrying up to eight Humans and their equipment.",
          role:'Passenger',
        },
        {
          name:'RAFT',
          description:"As it does with all its industrial concerns, Argo takes cargo transport very seriously, on every scale. The RAFT is no exception, able to carry three standardized 32-SCU cargo containers for a total hauling capacity of 96 SCU. Perfect for entry-level haulers and old pros alike, the RAFT is an ideal solution for reliable local freight transport. Once again, Argo gets the job done.",
          role:'Medium freight',
        },
        {
          name:'SRV',
          description:"When it comes to getting the job done, ARGO doesn’t mess around. From simple freight and cargo towing to harrowing search-and-rescue operations, the SRV handles whatever you can throw at it. The bespoke tractor system utilizes an innovative plate and arm combination, allowing for effortless solo use as well as precision team towing for bigger jobs. Your crew and passengers stay safe too thanks to durable shields and heavy-duty armor that keep the cockpit and components secure when the situation gets hairy.",
          role:'Recovery',
        },
        ],
      banu: [
        {
          name:'Defender',
          description:"Meet the Banu Defender, a multi-crew fighter whose patchwork design highlights technology from a variety of species. Featuring modest accommodations for its crew and easy access to components, the Defender gets its name from the role it serves: the first line of defense against enemy attacks. That's why the Defender makes the ideal companion to the Merchantman: one to do the heavy hauling and the other to perform the deadly dogfighting.",
          role:'Light fighter',
        },
        {
          name:'Merchantman',
          description:"Banu traders are renowned for their merchant prowess, traveling the spacelanes and trading with everyone from humans to the Vanduul! Their sturdy, dedicated trading ships are prized beyond all other transports, sometimes passing from generation to generation of Banu.",
          role:'Heavy freight',
        },
        ],
      consol: [
        {
          name:'HoverQuad',
          description:"You know that place where the roads end, and sky runs out? That little place at the very edge of adventure, where there’s nowhere to go but forward? Where over every dune, and around every patch of weird flora, you might tumble headlong into glorious unfamiliarity? That’s HoverQuad country, and it’s begging to be explored.",
          role:'Racing',
        },
        {
          name:'Mustang Alpha',
          description:"Inspired by Consolidated Outland CEO Silas Koerner’s cutting edge vision, the Mustang Alpha is a sleek, stylish spacecraft that uses ultralight alloys to push power ratios to the limits, albeit sometimes unsafely. And now, with the optional Cargo Carrier, you can have the Alpha’s advantages without sacrificing carrying capacity.",
          role:'Cargo',
        },
        {
          name:'Mustang Beta',
          description:"The Mustang Beta, with its unprecedented range, is made for long duration flights. The factory standard Tarsus Leaper Jump Engine enables the Beta to travel to the galaxy’s farthest systems with ease, while the ship’s unique Com4T living quarters will make the journey feel like you never left home.",
          role:'Pathfinder',
        },
        {
          name:'Mustang Delta',
          description:"While it may not be able to go toe to toe with some of the military specific ships, by reinforcing the Mustang’s already strong hull construction with Consolidated Outland’s own line of Cavalry Class Mass Reduction Armor, the Delta has a reduced cross-sectional signature that evens the playing field.",
          role:'Light fighter',
        },
        {
          name:'Mustang Gamma',
          description:"Consolidated Outland’s design and engineering teams have managed to tweak and refine the Mustang into an admirable racer. The end result, the Mustang Gamma, has smooth acceleration, and power on demand thanks to an innovative package featuring three powerful Magma Jet engines for maximum thrust.",
          role:'Racing',
        },
        {
          name:'Mustang Omega',
          description:"Consolidated Outland teamed up with custom tuning company Accelerated Mass Design to create a limited edition racer that features a ramped up fuel intake for faster recycling of the ship’s already impressive boost system. To cap off the collaboration, AMD enlisted resident underground artist Sektor8 to design the dynamic paint job.",
          role:'Racing',
        },
        {
          name:'Nomad',
          description:"Imagine the versatility of a medium-sized, multi-purpose freighter packed into a compact frame. Imagine a ship designed for lone pilots finding their way across a galaxy teeming with possibilities. The Nomad is ready to go anywhere and do anything - the perfect solution for anyone yearning to start a brand-new adventure.",
          role:'Light freight',
        },
        {
          name:'Pioneer',
          description:"After their auspicious debut with the Mustang, Consolidated Outland has gone and changed the game again with the reveal of the Pioneer. This self-contained mobile construction yard is capable of creating planetary modular structures, ushering a new wave of aspiring colonists to customize their new homes on the frontier.",
          role:'Heavy construction',
        },
        ],
      crusader: [
        'A1 Spirit','A2 Hercules','Ares Inferno','Ares Ion','C1 Spirit','C2 Hercules','E1 Spirit','Genesis Starliner','M2 Hercules','Mercury Star Runner'
        ],
      drake: [
        'Buccaneer','Caterpillar','Corsair','Cutlass Black','Cutlass Blue','Cutlass Red','Cutlass Steel','Cutter','Dragonfly','Herald','Kraken','Kraken Privateer','Mule','Vulture'
        ],
      esperia: [
        'Blade','Glaive','Prowler','Scythe','Talon','Talon Shrike'
        ],
      gatac: [
        'Railen'
        ],
      greycat: [
        'PTV','ROC','ROC-DS','STV','UTV'
        ],
      kruger: [
        'P-52 Merlin','P-72 Archimedes'
        ],
      misc: [
        'Expanse','Freelancer','Freelancer DUR','Freelancer MAX','Freelancer MIS','Hull A','Prospector','Razor','Razor EX','Razor LX','Reliant Kore','Reliant Mako','Reliant Sen','Reliant Tana','Starfarer','Starfarer Gemini'
        ],
      origin: [
        '100i','125a','135c','300i','315p','325a','350r','400i','600i Explorer','600i Touring','85X','890 Jump','G12','G12a','G12r','M50','X1','X1 Force','X1 Velocity'
        ],
      rsi: [
        'Aurora CL','Aurora ES','Aurora LN','Aurora LX','Aurora MR','Constellation Andromeda','Constellation Aquila','Constellation Phoenix','Constellation Taurus','Mantis','Scorpius','Scorpius Antares','Ursa'
        ],
      tumbril: [
        'Cyclone','Cyclone AA','Cyclone MT','Cyclone RC','Cylcone RN','Cyclone TR','Nova','Ranger CV','Ranger RV','Ranger TR'
        ],
      s1coolers: [
        'ArcticStorm','Berian','BlastChill','Bracer','CryoStar','Ecoflow','Endo','FlashFreeze','FrostStar','Gelid','Glacier','Heatsafe','Hydrocel','Polar','QuickCool','Snowblind','Thermax','Tundra','Ultraflow','Vaporblock','WinterStar','ZeroRush','IcePlunge'
        ],
      s2coolers:[
        'AbsoluteZero','Arctic','Aufeis','Avalanche','Boreal','Coldsnap','CoolCore','CryoStarEx','FrostStarEx','FullFrost','Graupel','Heatsink','HydroJet','Icebox','IceDive','Nightfall','Permafrost','RapidCool','Snowfall','Snowpack','Taiga','Whiteout','WinterStarEx'
        ],
      s3coolers:[
        'Blizzard','Chillmax','CryoStarXL','Draug','Elsen','FrostStarXL','Galinstan','Hydropulse','Iceflush','Kragen','Mercury','Tempest','ThermalCore','WinterStarXL'
        ],
      s4coolers:[
        'Idris','Javelin','890 Jump','Bengal'
        ],
      s1powerplants: [
        'Breton','Charger','Deltamax','Dynaflux','Endurance','FierellCascade','Fortitude','Hypergen','Ionburst','JS300','Lightblossom','Lumacore','Magnabloom','Overdrive','Powerbolt','Quadracell','Regulus','Roughneck','SlipStream','SonicLite','Starheart','Sunflare','Whiterose','Zapjet'
        ],
      s2powerplants: [
        'Bolide','Cirrus','Daybreak','Diligence','Eclipse','Exogen','FullForce','GammaMax','Genoa','IonSurge','JS400','Lotus','LuxCore','Maelstrom','QuadracellMT','Radiance','Sedulity','Solarflare','SparkJet','Starburn','Trommel','TurboDrive','UltraFlux','Vortex'
        ],
      s3powerplants: [
        'Celestial','Centurion','Drassik','Durango','Fulgur','FullForcePro','Ginzel','IonSurgePro','JS500','Megaflux','NewDawn','QuadracellMX','Reliance','Smartgen','SparkJetPro','Superdrive','TigerLily'
        ],
      s4powerplants: [
        'Bengal','890 Jump','Idris','Reclaimer'
        ],
      s1shields: [
        '5SA','6SA','7SA','AllStop','Banu Placeholder','Bulwark','Cloak','Falco','ForceWall','FR66','Guardian','Hex','Ink','Jaghte','Mirage','Palisade','SecureHyde','Shimmer','Steward','Targa','Veil','Web'
        ],
      s2shields: [
        '5MA','6MA','7MA','Armada','Aspis','Bamoty','Banu Placeholder','Bloc','Citadel','Coverall','FR76','FullStop','Haltur','Obscura','Rampart','RPel','SecureShield','Sheut','Shroud','Stop','Trenta','Umbra'
        ],
      s3shields: [
        '5CA','6CA','7CA','Armor','Barbican','FR86','FullBlock','Guard','Haven','Parapet','SecureScreen','Stronghold','SureStop','Ward'
        ],
      s4shields: [
        'Bengal','Idris','Idris-Pirate','Javelin','890 Jump'
        ],
      s1quantumdrives: [
        'Atlas','Beacon','Burst','Colossus','Drift','Eos','Expedition','Flood','FoxFire','Goliath','Hyperion','LightFire','Rush','Siren','Spectre','VK-00','Voyage','Vulcan','Wayfare','Zephyr'
        ],
      s2quantumdrives: [
        'Aither','Bolon','Bolt','Cascade','Crossfield','Flash','Hemera','Huracan','Khaos','Nova','Odyssey','Quest','Sojourn','SparkFire','Spicule','SunFire','Torrent','XL1','Yaluk','Yeager'
        ],
      s3quantumdrives: [
        'Agni','Balandin','Drifter','Echo','Erebos','Fissure','Impulse','Kama','Metis','Pontes','Ranger','TS2','Tyche','Vesta','Wanderer'
        ],
      s4quantumdrives: [
        'Javelin','Idris','890 Jump'
        ],
    };
  },
  methods: {
    updateInfo(ships) {
      this.vehicleName = ships.name
      this.vehicleDescription = ships.description
      this.vehicleRole = ships.role
    }
  }
};
</script>

<style scoped>
.container {
  margin: auto;
  min-height: 85vh;
  display: flex;
  min-width:90vw;
  background-color:var(--backgray);
  animation: 1s appear;
  padding-block-start:15px;
  user-select:none;
}
.col-md-3 {
  background-color:var(--darkgray);
  border-style:solid;
  border-width:3px;
  border-color:var(--lightorange);
  border-radius:25px;
  min-height:85vh;
}

.leftcard {
  position: relative;
  width: 30%;
  height: auto;
  padding-inline-end:25px;
  margin-inline-start:-15px;
}

.centercard {
  position: relative;
  width: 40%;
  height: auto;
  padding-block-start:30px;
}

.centercard p {
  font-size:18px;
}

.rightcard {
  position: relative;
  width: 30%;
  height: auto;
}

.infoCard {
  text-align:center;
  margin-inline-start:0px;
}
.infoCard td {
  width:300px;
}

.title {
  animation: 1s appear;
  font: bold 64px/70px 'Segoe UI', sans-serif;
  display: block;
  color: var(--lightorange);
  letter-spacing: 1px;
}

p {
  font-weight: 300;
  font-family: 'Segoe UI', sans-serif;
  font-size: 14px;
  font-weight:bold;
  letter-spacing:1px;
  color: var(--lightgray);
}

h4 {
  font-weight: bold;
  font-family: 'Segoe UI', sans-serif;
  font-size: 28px;
  font-weight:bold;
  letter-spacing:1px;
  color: var(--lightgray);
  padding-block-end:5px;
  text-align:center;
  padding-block-start:10px;
}

.infoCard p {
  margin-block-start:-15px;
  color:var(--lightorange);
}
.infoCard h4 {
  font-size:20px;
  margin-block-start:-10px;
}

.dropdown .icon {
  scale:200%;
  padding-block-start:5px;
  color:var(--lightgray);
}

/*Left Card */

.leftcard select {
  background-color:var(--lightorange);
  border-style:solid;
  border-radius:20px;
  border-color:var(--lightorange);
  color:var(--darkgray);
  width:300px;
  font-weight:bold;
  font-size:18px;
  text-align:center;
  height:40px;
  margin-block-start:-20px;
}
.leftcard select option:hover {
  color:var(--orangehover);
}
.leftcard button {
  border-style:solid;
  border-radius:50%;
  border-width:15px;
  border-color:var(--lightgray);
  cursor:pointer;
  display:inline-flex;
  padding:5px 5px;
  background-color:var(--lightgray);
  margin-block-start:5px;
}
.leftcard button:hover {
  background-color:var(--lightorange);
  border-color:var(--lightorange);
}
.leftcard label {
  margin-block-start:2px;
  margin-block-end:2px;
  display:inline-flex;
}
.leftcard table {
  text-align:center;
  min-width:250px;
  margin-block-start:-20px;
}
.leftcard td {
  width:125px;
}

/*Right Card*/
.vehicleText {
  padding-inline-start:15px;
  padding-inline-end:15px;
}


/*Center Card*/
.componentSelect {
  background-color:var(--darkgray);
  border-style:solid;
  border-width:3px;
  border-color:var(--lightorange);
  border-radius:25px;
  margin-inline-end:25px;
  margin-block-start:15px;
}
.coolerButton {
  padding-inline-start:5px;
  padding-block-end:2px;
  padding-inline-end:5px;
}
.coolerButton h4 {
  font-size:20px;
  color:var(--lightorange);
  padding-block-start:0px;
}
.coolerButton p {
  padding-block-end:5px;
  font-size:16px;
}
.coolerButton button {
  background-color:transparent;
  border:2px solid transparent;
  border-radius:15px;
  width:30%;
  overflow:scroll;
  margin-block-start:4px;
}
.coolerButton button:hover {
  border-color:var(--lightorange);
}
.coolerButton button:hover h4 {
  color:var(--orangehover);
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>