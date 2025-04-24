	<tr>
		<td>
			<?php
			if (isset($_GET['page']) && $_GET['page'] == "etat_civiled")
			{
			?>
			<table>
			<tr><td>Nom : </td><td>Girard</td></tr>
			<tr><td>Prénom : </td><td>Lucas</td></tr>
			<tr><td>Adresse : </td><td>1017 Boulevard de la Paix</td></tr>
			<tr><td>Ville : </td><td>HEROUVILLE SAINT CLAIR</td></tr>
			<tr><td>Code postal : </td><td>14200</td></tr>
			<tr><td>Pays : </td><td>France</td></tr>
			<tr><td>Nationalité : </td><td>Française</td></tr>
			<tr><td>Telephone Fixe : </td><td>02/31/94/00/47</td></tr>
			<tr><td>Telephone Mobile : </td><td>06/20/44/70/91</td></tr>
			<tr><td>Email : </td><td>girard.lucas1@free.fr - <a href="telechargement/Lucas_Girard.vcf.zip">vCard</a> - <a href="telechargement/Lucas_Girard.ldif.zip">LDIF</a>  <a href="index.php?page=telechargement#vcard"> ? </a></td></tr>
			<tr><td>Date de naissance : </td><td>07/10/1988</td></tr>
			<tr><td>Situation : </td><td>Célibataire</td></tr>
			<tr><td>Niveau d'Etude : </td><td>Niveau Bac</td></tr>
			<tr><td>Télétravail accepté : </td><td>Oui</td></tr>
			<tr><td>Rémunération : </td><td>55% du SMIC et 70% a daté du 7 octobre 2009 dans le cadre d'un contrat de professionnalisation</td></tr>
			<tr><td>Permis de conduire : </td><td>Oui, permis B</td></tr>
			<tr><td>Véhicule : </td><td>Oui</td></tr>
			</table>
			<a href="index.php?page=etat_civile">Réduire</a>
			</td>
			<td class="photod"><img src="images/photo.jpg" alt="photo lucas girard" /></td>			
			<?php
			}
			else
			{
			?>
			Lucas GIRARD<br />
			1017, Boulevard de la Paix<br />
			14200 HEROUVILLE SAINT CLAIR<br />
			Tél : 02 31 94 00 47 - Portable : 06 20 44 70 91<br />
			Email : girard.lucas1@free.fr - <a href="telechargement/Lucas_Girard.vcf.zip">vCard</a> - <a href="telechargement/Lucas_Girard.ldif.zip">LDIF</a>  <a href="index.php?page=telechargement#vcard"> ? </a><br />
			20 ans, Célibataire<br />
			Titulaire du permis B<br />
			<a href="index.php?page=etat_civiled">En savoir +</a>	
			</td>
			<td><img src="images/photo.jpg" alt="photo lucas girard" /></td>
			<?php
			}
			?>
		
	</tr>
</table>
